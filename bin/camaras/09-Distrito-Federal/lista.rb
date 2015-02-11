# encoding: utf-8
module Parser

  module DistritoFederal

    class Lista

      def initialize
        @ids = []
        request(DistritoFederal.endpoints[:lista]) do |data|
          doc = Nokogiri::HTML(data)
          doc.encoding = 'utf-8'
          @ids = doc.css('.span5 a').map { |link|
            {url: link.attr('href')}
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

  end #DistritoFederal

end #Parser