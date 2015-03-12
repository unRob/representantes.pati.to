# encoding: utf-8
module Parser
  module Veracruz

    class Comision

      def requests
        [{url: 'co&leg=63'}]
      end

      def parse data, request
        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'

        coms = dom.css('.textoTitulo').to_a
        coms.shift 3 #porqué... ¿usar css descriptivo apesta?

        coms.each do |com|
          nombre = com.text.squish
          fkey = request[:url]+'#'+nombre.stub
          yield({
            camara: :local,
            entidad: Veracruz.id_entidad,
            nombre: nombre,
            meta: {
              fkey: fkey,
              lastCrawl: Time.now
            }
          })
        end

        yield({
          camara: :local,
          entidad: Veracruz.id_entidad,
          nombre: 'Mesa Directiva',
          meta: {
            fkey: 'http://www.legisver.gob.mx/?p=md',
            lastCrawl: Time.now,
          }
        })

        yield({
          camara: :local,
          entidad: Veracruz.id_entidad,
          nombre: 'Junta de Coordinación Política',
          meta: {
            fkey: 'http://www.legisver.gob.mx/?p=jcp',
            lastCrawl: Time.now,
          }
        })

      end

    end #/comisiones

  end
end