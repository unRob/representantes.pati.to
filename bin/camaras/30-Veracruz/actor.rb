module Parser
  module Veracruz

    class Actor

      def initialize
        @comisiones = {
          'mesa-directiva' => ::Comision.where({'meta.fkey' => 'http://www.legisver.gob.mx/?p=md'}).first,
          'junta-de-coordinacion-politica' => ::Comision.where({'meta.fkey' => 'http://www.legisver.gob.mx/?p=jcp'}).first
        }
      end

      def single_page
        true
      end

      def partido url
        url = url.split('/').last.split('.').first.downcase
        return case url
          when 'logo_movimientociudadano' then 'mc'
          when 'nuevaalianzach'           then 'panal'
          else url.gsub(/logo_?/, '')
        end
      end

      def parse body, request
        dom = Nokogiri::HTML(body)
        dom.encoding = 'utf-8'

        dom.css('.item-gabinete').each do |item|
          nombre = item.at_css('h3').text.gsub('Dip. ', '').squish
          actor = {
            meta: {
              lastCrawl: Time.now,
              fkey: Veracruz.endpoints[:base]+'/'+item.at_css('a').attr('href')
            },
            nombre: nombre,
            camara: 'local',
            entidad: Veracruz.id_entidad,
            distrito: nil,
            telefonos: [],
            links: [],
          }

          actor[:imagen] = Veracruz.endpoints[:base]+item.at_css('.img-gabinete').attr('src').sub('..', '')


          # puts item.at_css('h3:nth-child(3)').inner_html
          distrito, puesto = item.at_css('h3:nth-child(3)').inner_html.split(/<br\/?>/)

          if distrito =~ /Distrito/
            dto, cabecera = distrito.split('.')
            dto = dto.gsub('Distrito ', '').to_arabigo
            actor[:distrito] = "dl-#{Veracruz.id_entidad}-#{dto}"
            actor[:cabecera] = cabecera.squish
            actor[:eleccion] = 'mayoría relativa'
          else
            actor[:distrito] = "dl-#{Veracruz.id_entidad}-rp"
            actor[:eleccion] = 'representación proporcional'
          end

          if puesto && puesto !~ /COORDINADOR/
            puesto, com = puesto.split(' DE LA ')

            puesto = puesto.downcase.squish
            com = @comisiones[com.stub]

            raise "#{nombre} #{com.stub}" unless com
            actor[:genero] = puesto.chars.last == 'a' ? 0 : 1

            actor[:puestos] = [{
              puesto: puesto,
              comision: com
            }]
          end

          actor[:partido] = partido(item.at_css('.gabinete-card img:last-child').attr('src'))

          comisiones = item.css('.textoNormalDip')
          if comisiones.count > 0
            base = Veracruz.endpoints[:lista_comisiones].gsub('{{url}}', 'co&leg=63')
            actor[:puestos] ||= []
            comisiones.each do |comision|
              comision = comision.text.squish
              next if comision == ''
              comision, puesto = comision.split('-')
              begin
                puesto = puesto.downcase.squish
              rescue Exception
                puts comision.inspect
                puts nombre
                exit;
              end

              if !actor[:genero] && puesto != 'vocal'
                actor[:genero] = puesto.chars.last == 'a' ? 0 : 1
              end

              fkey = base+'#'+comision.stub
              com = ::Comision.where({"meta.fkey" => fkey}).first

              raise "No encontré la comision #{comision.squish.stub}" if !com

              actor[:puestos] << {
                comision: com,
                puesto: puesto
              }
            end #/each
          end #/comisiones

          contacto = item.text.split('CONTACTO:').last
          data = contacto.split("\n").map { |v|
            v.squish.gsub(/[:()\s]/, '').downcase
          }.reject {|i| i == ''}.reverse

          data = Hash[*data]

          actor[:correo] = data[:correo] if data[:correo]
          if data['telefono']
            actor[:telefonos] ||= []
            actor[:telefonos] << {
              numero: formatoTelefono(data['telefono']),
              extension: data['ext']
            }
          end

          if data['fax']
            actor[:telefonos] ||= []
            actor[:telefonos] << {
              numero: formatoTelefono(data['fax'])
            }
          end

          yield actor
        end #each
      end

    end #/class

  end
end