# encoding: utf-8
module Parser

  module Senado

    class Lista

      def initialize
        @ids = []
        @letras = %w{a b c d e f g h i j k l m n o p q r s t u v w x y z}
        
        lista = Crawler.new Parser::Senado::endpoints[:lista]
        lista.requests = @letras.map {|letra| {letra: letra.upcase} }

        lista.run do |response, request|
          doc = Nokogiri::HTML(response.body)
          doc.css('#contenido_informacion td[width="33%"]').each do |chato|
            @ids << {id: chato.at_css('a').attr('href').scan(/id=(\d+)/)[0][0]}
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

  end #Senado

end #Parser