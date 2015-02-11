# encoding: utf-8
require 'i18n'
module Parser

  module Aguascalientes

    class Actor

      def single_page
        true
      end

      def initialize
        @partidos = {
          1 => :pan,
          2 => :pri,
          5 => :pt,
          6 => :mc,
          7 => :panal,
          10 => :verde,
          11 => :prd
        }

      end


      def partido url
        num = url.gsub(/\D/, '').to_i
        @partidos[num]
      end

      def stub text
        I18n.transliterate text.downcase.gsub(/[^[:alnum:]]/, '')
      end


      def parse data, request

        @telefonos = {}

        Log.info "Solicitando directorio telefónico"
        request(Aguascalientes.endpoints[:directorio]) do |d|
          dom = Nokogiri::HTML(d)
          dom.encoding = 'utf-8'

          main = dom.at_css('#principal')
          tels = main.at_css('span[style]').text.scan(/(\d{3} \d{4})/).flatten

          main.css('table tr').each do |tr|
            next if tr.text =~ /Distrito/
            lookup = stub(tr.css('td:nth-child(2)').text)
            @telefonos[lookup] = tels.dup.map {|tel|
              {
                numero: tel,
                extension: tr.css('td:nth-child(4)').text
              }
            }
          end
        end

        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'
        container = dom.css('.container div > table')
        fixedDom = container.inner_html.squish.gsub('<tr>', '</tr><tr>').sub('</tr><tr>', '<tr>')

        domBueno = Nokogiri::HTML(fixedDom)
        domBueno.css('tr').each do |actorTR|
          actor = parseActor actorTR
          yield actor
        end

      end

      def parseActor dom
        actor = {
          meta: {
            fkey: '',
            lastCrawl: Time.now
          },
          camara: 'local',
          entidad: Aguascalientes.id_estado,
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        img, data = dom.css('td').to_a
        nombreDom, comisionesDom = data.css('.tituloDiputado').to_a

        actor[:imagen] = Aguascalientes.endpoints[:base]+img.at_css('img').attr('src')
        nombre = nombreDom.text.gsub('Dip. ', '').squish.gsub(/[^[a-zÁáÉéÍíÓóÚúüñÑ\s\.]]/i, '')
        actor[:nombre] = nombre

        dtoDom = data.at_css('.contenidoDiputados')
        dto = dtoDom.text
        fkey = Aguascalientes.endpoints[:actor]
        if dto =~ /Distrito/i
          eleccion = 'mayoría relativa'
          dto = dto.split(' ').last.to_arabigo
          fkey += "\#distrito-#{dto}"
        else
          dto = 'rp'
          eleccion = 'representación proporcional'
          fkey += '#rp-'+nombre.downcase.split(/[^a-z]/i).map {|w| w[0]}.join
        end

        actor[:distrito] = "dl-#{Aguascalientes.id_estado}-#{dto}"
        actor[:meta][:fkey] = fkey
        actor[:partido] = partido dtoDom.parent.at_css('img').attr('src')

        links = data.css('div > i')
        if links.count > 1
          actor[:links] = []
          links.each do |link|
            servicio, url = link.text.split(':')
            if servicio =~ /mail/
              actor[:correo] = url.squish
            else

              url = url.squish
              servicio = servicio.downcase
              url = case servicio
                when 'twitter' then "https://twitter.com/#{url.gsub '@', ''}"
                else url
              end

              actor[:links] << {
                servicio: servicio,
                url: url
              }
            end
          end
        end

        lookup = stub nombre
        if tels = @telefonos[lookup]
          actor[:telefonos] = tels
        else
          Log.debug "No encontré teléfono para #{lookup}"
        end

        comisionesDom.at_css('.contenidoDiputadosBajo').inner_html.split("<br>").each do |com|
          nombre = com.gsub(/\*\s/, '').squish
          idComision = Aguascalientes.endpoints[:actor]+'#'+nombre.downcase.gsub(/[^[:alnum:]]/, '-')
          comision = ::Comision.where({"meta.fkey" => idComision}).first
          if !comision
            Log.debug comisionesDom.at_css('.contenidoDiputadosBajo').text
            Log.error "No encontré la comisión #{nombre}"
            exit
          else
            actor[:puestos] << {puesto: 'presidente', comision: comision}
          end

        end

        actor
      end

    end #/actor

  end #/edo

end #/parser