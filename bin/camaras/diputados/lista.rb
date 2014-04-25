# encoding: utf-8
module Parser

  module Diputados

    class Lista


      def initialize
        @ids = []
        request(Diputados.endpoints[:lista]) do |data|
          doc = Nokogiri::HTML(data)
          doc.encoding = 'utf-8'
          @ids = doc.css('.linkVerde').map { |link|
            {id: link.attr('href').gsub(/\D/, '')}
          }
        end
      end

      def to_a
        @ids
      end

      def count
        @ids.count
      end

    end #Lista

  end #Diputados

end #Parser