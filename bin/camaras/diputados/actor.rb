# encoding: utf-8
module Parser

  module Diputados

    def self.test
      parser = Diputados::Actor.new
      html = File.read(File.expand_path('../actor.html', __FILE__))
      request = {
        url: 'http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt=57',
        id: 57
      }
      Log.json parser.parse(html, request)
    end

    class Actor

      attr_accessor :telefonos;
      attr_accessor :endpoints;

      def initialize
        @telefonos = {}
        @endpoints = Parser::Diputados.endpoints

        Log.info "Populando lista de teléfonos..."
        request(endpoints[:telefonos]) do |data|
          doc = Nokogiri::HTML(data)
          doc.encoding = 'utf-8'
          doc.css('table[background="images/fnd-oja.jpg"]').each do |info|
            correo, ext = sacaTelefono(info)
            @telefonos[correo] ||= []
            @telefonos[correo] << ext
          end
        end
        Log.info "#{@telefonos.count} telefonos encontrados"
      end

      def sacaTelefono data
        correo = data.at_css('.style3').text
        ext = data.at_css('.Estilo3.style1').text.gsub('Ext ', '').squish
        return [correo, ext]
      end

      def parse data, request
        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'diputados',
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'

        info = doc.at_css('table:nth-child(2)')
        rows = info.css('tr')

        if imgSrc = rows[0].css('img:first-child')
          actor[:imagen] = urlParaFoto(imgSrc.attr('src').text)
        end

        actor[:partido] = partido rows[0].css('img')[1]

        actor[:nombre] = rows[0].text.gsub('Dip. ', '').squish

        actor[:eleccion] = texto(rows[1]).downcase
        entidad = $entidades.index(texto(rows[2]).downcase)+1
        actor[:entidad] = entidad
        distrito = texto(rows[3])
        distrito = "c"+distrito if (actor[:eleccion] == 'representación proporcional')
        actor[:distrito] = "f#{entidad}-#{distrito}"
        actor[:cabecera] = texto(rows[4])
        actor[:curul] = texto(rows[5])
        actor[:suplente] = texto(rows[6]).gsub(/Suplente:\s+/, '')
        links = rows[8].css('a')
        actor[:correo] = links[0].text.squish

        if links[1]
          actor[:links] << {servicio: :http, url: rows[8].css('a')[0].attr('href')}
        end

        if exts = telefonos[actor[:correo]]
          exts.each do |ext|
            actor[:telefonos] << {numero: Diputados::telefonos[ext.length], extension: ext}
          end
        else
          Log.warn "No tengo teléfonos para #{actor[:correo]} \n #{request[:url]}\n"
        end


        doc.css('.linkNegroSin[target=_self]').each do |com|
          next if com.text.squish == ''
          url = endpoints[:base]+com.attr('href')
          
          comision = Comision.where({"meta.fkey" => url }).first
          next unless comision

          puesto = :integrante
          nombre = com.text.squish
          if nombre =~ /\)$/
            puesto = nombre.scan(/\(([[:alpha:]]+)\)$/)[0][0].downcase
          end

          actor[:puestos] << {puesto: puesto, comision: comision}
        end

        actor
      end


      private

      def urlParaFoto(src)
        id = src.gsub(/\D/, '')
        "http://sitl.diputados.gob.mx/LXII_leg/fotos_lxii/#{id}.JPG"
      end

      def texto el
        el.css('td').last.text.squish
      end

      def partido src
        return nil unless src
        src = src.attr('src')

        p = src.gsub('images/', '').gsub(/\d/, '').gsub(/\..+$/, '')
        res = case p
          when 'logo_movimiento_ciudadano' then 'mc'
          when 'logpt' then 'pt'
          when 'logvrd' then 'pvem'
          else p
        end
        res
      end

    end #class

  end #diputados

end #parser