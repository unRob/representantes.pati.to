module Parser
  module Jalisco

    class Actor

      def parse body, request

        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'local',
          entidad: Jalisco.id_entidad,
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        dom = Nokogiri::HTML(body)
        dom.encoding = 'utf-8'

        container = dom.at_css('#node-page-56')
        actor[:imagen] = container.at_css('.img_diputado img').attr('src')
        telefono = nil
        extensiones = []

        container.css('.datos_generales_dip li').each_with_index do |li, index|
          # puts "#{index} - #{li.text.squish}"
          case index
            when 0 then actor[:nombre] = li.text.gsub('Dip. ', '').squish
            when 1 then actor[:partido] = li.at_css('div').attr('class').downcase
            when 2
              dto = li.text.split(': ').last
              if dto == 'Plurinominal'
                actor[:eleccion] = 'representación proporcional'
                actor[:distrito] = 'rp'
              else
                dto = dto.gsub(/\D/, '').to_i
                actor[:eleccion] = 'mayoría relativa'
                actor[:distrito] = "dl-#{Jalisco.id_entidad}-#{dto}"
              end
            when 3 then telefono = formatoTelefono(li.text.split(': ').last.gsub(/\D/, ''))
            when 4 then extensiones += li.text.split(': ').last.split(',')
            when 5 then actor[:correo] = li.text.split(': ').last.squish
            when 6 then actor[:links] << {servicio: :postal, url: li.text.split(':').last.squish}
          end #/case
        end

        extensiones.each do |extension|
          actor[:telefonos] << {numero: telefono, extension: extension.squish }
        end

        #módulos
        container.css('.datos_casas_dip ul li').each do |li|
          items = li.text.split("\n").map(&:squish)
          items.reject! {|item| item == ''}
          data = {}
          items.each do |item|
            key, value = item.split ':'
            next if value == '' || value == nil
            data[key] = value.squish
          end

          actor[:links] << {servicio: :postal, url: "#{data['Dirección']}, #{data['Municipio']}"}

          if tels = data['Teléfono(s)']
            if tels.gsub(/\D/, '').length > 12
              tels.split(/ [\-y] /).each do |tel|
                actor[:telefonos] << {
                  numero: formatoTelefono(tel.gsub(/\D/, ''), true),
                  extension: nil
                }
              end
            else
              actor[:telefonos] << {numero: formatoTelefono(data['Teléfono(s)'].gsub(/\D/, ''), true), extension: nil}
            end

          end

        end

        container.css('.datos_comisiones_dip li').each do |com|
          puesto = com.text.split('-').last.squish
          if puesto =~ /^Presiden/
            actor[:genero] = puesto[-1] == 'a' ? 0 : 1;
          end

          puesto = puesto.downcase
          puesto = 'integrante' if puesto == 'vocal'
          puesto = puesto.gsub(/^pro/, '')

          link = com.at_css('a').attr('href')
          comision = Comision.where({"meta.fkey"=>link}).first

          if !comision
            Log.debug "No encontré la comisión <#{link}>"
            next
          end

          actor[:puestos] << {
            comision: comision,
            puesto: puesto
          }
        end

        # pp actor[:telefonos]
        actor

      end #/parse

    end #/Actor

  end #/Jalisco
end #/Parser