# encoding: utf-8
module Parser

  module Aguascalientes

    class Comision
      attr_accessor :requests

      def initialize
        @requests = [{url: Aguascalientes.endpoints[:actor]}]
      end

      def parse data, request
        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'

        comisiones = []
        doc.css('.contenidoDiputadosBajo').each do |span|
          comisiones += span.text.split("\n").map {|com|
            com.gsub(/\*\s/, '').squish
          }
        end

        comisiones.uniq.sort.each do |nombre|
          comision = {
            camara: 'local',
            entidad: Aguascalientes.id_estado,
            meta: {
              fkey: Aguascalientes.endpoints[:actor]+"\##{nombre.downcase.gsub(/[^[:alnum:]]/, '-')}",
              lastCrawl: Time.now
            },
            integrantes: [],
            nombre: nombre
          }

          yield comision
        end
      end

    end #comision

  end #Aguascalientes

end #Parser