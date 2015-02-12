module Parser

  module Edomex

    class Actor

      def initialize

      end


      def traduce row
        encabezado = row.at_css('.Encabezado')

        if !encabezado
          fecha = row.at_css('.Fecha')
          return :comisiones if fecha && fecha.text.squish.match(/Comisiones$/i)
          return nil
        end

        return nil if !encabezado
        return :links if encabezado.at_css('img') || row.at_css('a') || row.text.match('www')

        return case encabezado.text.squish
          when 'Diputado de', 'Distrito' then :distrito
          when 'Sede' then :cabecera
          when /^Oficina/i then :telefonos
          when /Correo electrónico/i then :correo
          when 'Página web', 'Blog' then :links
          when 'Redes Sociales', 'Integración' then nil
          when ''
            if contenido = row.at_css('.TextoSecciones')
              text = contenido.text
              return nil if text.squish == ''
              return :telefonos if text.match(/^\s*Tel/i)
              if text.match(/Col\./) && !text.split('Col.').last.gsub(/CP\.\s*[\d\s]{5,}/, '').gsub(/\D/, '').match(/\d{7,}/)

                return nil
              end
              return :npi
            end
          else :npi
        end
      end

      def formatoTelefono digitos
        return case digitos.length
          when 12
             # 01 55 5555 5555
            if digitos.match(/^01(55|33|81)/)
              digitos.scan(/^(\d{2})(\d{2})(\d{4})(\d{4})$/)
            else
              # 01 777 777 7777
              digitos.scan(/^(\d{2})(\d{3})(\d{3})(\d{4})$/)
            end
          # 777 777 7777
          when 10 then digitos.scan(/^(\d{3})(\d{4}){2}$/)
          # 5555 5555
          when 8 then digitos.scan(/^(\d{4})(\d{4})$/)
          # 777 7777
          when 7 then digitos.scan(/^(\d{3})(\d{4})$/)
          else
            raise digitos
        end.flatten.join(' ')
      end

      def distrito row
        dto = row.at_css('.TextoSecciones').text
        if dto =~ /^[XLIV]+$/
          eleccion = 'mayoría relativa'
          distrito = "dl-#{Edomex.id_entidad}-#{dto.to_arabigo}"
        else
          eleccion = 'representación proporcional'
          distrito = 'rp'
        end

        {eleccion: eleccion, distrito: distrito}
      end

      def cabecera row
        { cabecera: row.at_css('.TextoSecciones').text.squish }
      end

      def telefonos row
        telefonos = []

        tels = row.at_css('.TextoSecciones').text
        tels = tels.split("\n").reject {|l| l.gsub(/\D/, '').length < 7}.join("\n")
        tels = tels.gsub(/[.\s()]/, '')

        numeros = tels.scan(/(\d{7,12})/).flatten

        ext = tels.gsub(/#{numeros.join('|')}/, '').scan(/[a-z\.:]\s*\d+$/)
        if !ext || ext.count == 0
          ext = nil
        else
          ext = ext[0].gsub(/\D/, '')
        end

        numeros = numeros.map {|n|
          res = formatoTelefono(n)
          res = res.gsub(/^01\s*/, '') if n.length == 12
          res
        }

        numeros.uniq.each do |tel|
          telefonos << {
            numero: tel,
            extension: ext
          }
        end
        {telefonos: telefonos}
      end

      def links row
        links = []
        encabezado = row.at_css('.Encabezado')

        url = row.at_css('.TextoSecciones')
        if link = url.at_css('a')
          url = link.attr('href')
        elsif row.text =~ /(www|http)/
          url = url.text
        elsif row.text
          url = row.text.squish
        end


        if img = encabezado.at_css('img')
          servicio = img.attr('src')
          links = case servicio
            when /facebook/
              url = "https://facebook.com/#{url}" unless url.match(/^https?:\/\//)
              if url =~ /\s/
                Log.debug "#{url} no parece un link válido de facebook"
                return {}
              end
              links << {servicio: 'facebook', url: url}
            when /twitter/
              url = "https://twitter.com/#{url}" unless url.match(/^https?:\/\//)
              url = url.gsub('@', '')
              links << {servicio: 'twitter', url: url}
          end
        else
          links << {servicio: :http, url: url}
        end

        {links: links}
      end

      def correo row
        {correo: row.at_css('.TextoSecciones').text.squish}
      end


      def parse body, request
        dom = Nokogiri::HTML(body)
        dom.encoding = 'utf-8'

        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'local',
          entidad: Edomex.id_entidad,
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        rows = dom.css('table[border="0"] > tr')
        actor[:imagen] = Edomex.endpoints[:base]+('/diputados/'+rows[0].at_css('img').attr('src')).gsub('//', '')

        nombre, partido = dom.at_css('title').text.split(':')
        nombre = nombre.gsub('Dip. ', '').squish
        begin
          partido = partido.gsub(/\W/, '').downcase.squish
        rescue
          Log.debug "WHAT IS PHP? Buscando el partido para #{request[:url]}"
          partido = actor[:imagen].split('/').last.split('_').first
        end

        actor[:nombre] = nombre
        actor[:partido] = partido

        if licencia = dom.at_css('.Estilo7')
          actor[:meta][:licencia] = true
          actor[:meta][:datos_licencia] = licencia.text.squish
        end

        empiezanComisiones = nil
        rows[1..rows.count-1].each_with_index do |row, index|
          prop = traduce row
          next if !prop

          if prop == :comisiones
            # Log.debug "saltando a comisiones"
            empiezanComisiones = index+2
            break
          end

          if prop==:npi
            text = row.text.squish
            unless text == ''
              Log.debug "Fila desconocida: #{text}"
              puts request[:url]
              TEST && exit
            end
            next
          end
          # Log.debug "#{index}: #{prop}"

          res = self.method(prop).call(row)
          if res[prop].is_a? Array
            actor[prop] += res[prop] #telefonos and shit
          else
            actor.merge!(res)
          end

        end


        rows[empiezanComisiones..rows.count-1].each do |row|

          nombre = row.at_css('.TextoSecciones')
          next unless nombre
          nombre = nombre.text.squish.gsub(/^Comisión (de(l| la)?)*\s*/i, '').gsub(/[^\s[:alpha:]]/, '').squish
          next if nombre == ''

          nombre = nombre.gsub(" Permanente ", ' ') if nombre.match('Comité')

          #--------------
          # Los burócratas de Edomex no saben de bases de datos, aparentemente
          #--------------
          nombre = case nombre
          when /discapacidad/i then "Para la Protección e Integración al Desarrollo de las Personas con Discapacidad"
          when /salud/i then 'Salud, Asistencia y Bienestar Social'
          when /ciencia/i then 'Educación, Cultura, Ciencia y Tecnología'
          when /superior/i then 'Vigilancia del Órgano Superior de Fiscalización'
          when /procuración/i then 'Procuración y Administración de Justicia'
          when /estudios/i then 'Comité de Estudios Legislativos'
          when /transportes/i then 'Comunicaciones y Transportes'
          when /finanzas/i then 'Finanzas Públicas'
          when /civil/i then 'Protección Civil'
          when 'Seguimiento a la Operación de Proyectos para Prestación de Servicios' then 'Seguimiento de la Operación de Proyectos para Prestación de Servicios'
          when 'Editorial y de Biblioteca' then 'Editorial y Biblioteca'
          when 'Equidad y Género' then 'Para la Igualdad de Género'
          when 'Especial de Enlace Legislativo' then 'Especial Enlace Legislativo'
          when 'Planeación Demográfica' then 'Planificación Demográfica'
          when 'Atención y Apoyo al Migrante' then 'Apoyo y Atención al Migrante'
          when 'Especial de Protección de Datos Personales' then 'Especial para la Protección de Datos Personales'
          when 'Comité Permante de Comunicación Social' then 'Comité de Comunicación Social'
          else nombre
          end

          next if nombre == :skip #hay comisiones que no tienen urls...

          stub = I18n.transliterate(nombre).gsub(',', '').downcase.gsub(' ', '-')
          comision = Comision.where({"meta.stub" => stub}).first

          if !comision
            puts row.to_html
            Log.error "No encontré la comisión <#{nombre}> (#{stub}) para #{request[:url]}"
            TEST && exit
            next
          end

          puesto = row.at_css('.Encabezado').text.downcase
          puesto = 'secretario' if puesto == 'prosecretario'
          actor[:puestos] << {
            puesto: puesto,
            comision: comision
          }
        end

        actor
      end

    end #/actor

  end #/edomex

end #/parser