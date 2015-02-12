# encoding: utf-8
module Parser
  module Jalisco


    class Comision

      def requests
        [{id: 'diputados/comites'},{id: 'diputados/comisiones'}]
      end

      def parse data, request
        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'

        tipo = request[:id].split('/').last
        tipo = 'comite' if tipo == 'comites'
        dom.css(".lista_#{tipo} a").each do |comision|
          nombre = comision.text.split('-').last.squish
          fkey = comision.attr('href').gsub('comites?', 'comisiones?')
          yield ({
            camara: 'local',
            entidad: Jalisco.id_entidad,
            nombre: nombre,
            meta: {
              fkey: fkey,
              lastCrawl: Time.now
            }
          })
        end

        if tipo == 'comite'
          yield({
            camara: 'local',
            entidad: Jalisco.id_entidad,
            nombre: "Junta de Coordinación Política",
            meta: {
              fkey: 'http://www.congresojal.gob.mx/congresojalV2/LX/diputados/comisiones?clave=Junta de Coordinación Política',
              lastCrawl: Time.now
            }
          })
          yield({
            camara: 'local',
            entidad: Jalisco.id_entidad,
            nombre: "Mesa Directiva",
            meta: {
              fkey: "http://www.congresojal.gob.mx/congresojalV2/LX/diputados/comisiones?clave=Mesa Directiva",
              lastCrawl: Time.now
            }
          })
        end
      end


    end #/Comisiones


  end #/ Jalisco
end