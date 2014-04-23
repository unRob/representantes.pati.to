# encoding: utf-8
module Parser

  module DistritoFederal

    class Actor

      def initialize
        @partidos = [nil, 'prd', 'pan', 'pri', 'pt', 'verde', 'panal', nil, 'mc']
        @telefonos = %w{51301900 51301980}
      end

      def parse data, request
        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'local',
          entidad: 9,
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'

        container = doc.at_css('.span8')
        gral = container.at_css('.row')
        info = container.css('.tabContainer > .tabContent')
        contacto = info[0]
        comisiones = info[2]

        imgs = gral.css('img')
        actor[:imagen] = DistritoFederal.endpoints[:base]+imgs[0].attr('src')
        actor[:partido] = partido(imgs[1].attr('src'))
        actor[:nombre] = doc.at_css('.container > h3').text.gsub('Dip. ', '').squish

        distrito = gral.css('h4').text
        if distrito =~ /Distrito/i
          eleccion = 'mayoría relativa'
          distrito = distrito.split(' ').last.to_arabigo
        else
          distrito = 'rp'
          eleccion = 'representación proporcional'
        end
        actor[:eleccion] = eleccion
        actor[:distrito] = "#dl-9-#{distrito}"

        ext = contacto.at_css('li:nth-child(2)').text.split(':').last.squish
        @telefonos.each do |tel|
          actor[:telefonos] << {numero: tel, extension: ext}
        end

        directo = contacto.at_css('li:nth-child(3)').text.split(':').last.squish
        if directo != ''
          Log.debug "Teléfono directo! #{request[:url]}"
          actor[:telefonos] << {numero: directo.gsub(/\D/,'')}
        end

        actor[:correo] = contacto.at_css('li:nth-child(4)').text.split(':').last.squish

        modulo = contacto.text.squish.scan(/Módulo(.+)/)[0][0]
        if modulo
          actor[:links] << {servicio: :postal, url: modulo.squish}
        end

        comisiones.children.each_slice(5) do |com|
          next unless com.count == 5
          id = DistritoFederal.endpoints[:base] + com[1].at_css('a').attr('href')
          comision = ::Comision.where({"meta.fkey" => id}).first
          next unless comision

          puesto = com[3].text.gsub('Cargo: ', '').downcase.squish
          actor[:puestos] << {puesto: puesto, comision: comision}
        end

        
        actor
      end


      private

      def partido str
        @partidos[str.gsub(/\D+/, '').to_i]
      end


    end

  end

end