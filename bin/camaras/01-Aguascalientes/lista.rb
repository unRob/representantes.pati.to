# encoding: utf-8
module Parser

  module Aguascalientes

    class Lista

      def initialize
        @ids = [{url: Aguascalientes.endpoints[:actores]}]
      end

      def to_a
        @ids
      end

      def count
        '¿algunos?'
      end

    end #Lista

  end #Aguascalientes

end #Parser