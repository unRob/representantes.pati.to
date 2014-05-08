# encoding: utf-8
module Parser

  module Senado

    class Lista

      def initialize
        @ids = []
        
        request(Senado.endpoints[:lista]) do |data|
          doc = Nokogiri::HTML(data)
          doc.encoding = 'utf-8'
          @ids = doc.css('div[align=left] strong > a').map {|link|
            {id: link.attr('href').scan(/id=(\d+)/).flatten[0]}
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

  end #Senado

end #Parser