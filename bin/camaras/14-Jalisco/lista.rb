# encoding: utf-8
module Parser

  module Jalisco

    class Lista

      def initialize
        @ids = []
        test_localizado = true
        test_localizado = false
        if TEST && test_localizado
          @ids = [
            {id: '179'}, #cel
            {id: '164'}, #doble dirección
            {id: '174'}, #guiones-entre-digitos
            {id: '180'}, #guiones entre teléfonos
            {id: '173'}, #"y" entre telefonos
          ]
        else
          request(Jalisco.endpoints[:lista]) do |data|
            dom = Nokogiri::HTML(data)
            @ids = dom.css('.contenedor_partido a').to_a.map {|a| {id: a.attr('href').split('=').last} }
          end
        end
      end

      def to_a
        @ids
      end

      def count
        @ids.count
      end

    end #Lista

  end #Jalisco
end #Parser