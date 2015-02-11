# encoding: utf-8
module Parser

  module Edomex

    class Lista

      def initialize
        @ids = [{url: Edomex.endpoints[:actores]}]
      end

      def to_a
        @ids
      end

      def count
        '¿algunos?'
      end

    end #Lista

  end #Edomex

end #Parser