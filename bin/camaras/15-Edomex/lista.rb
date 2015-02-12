# encoding: utf-8
module Parser

  module Edomex

    class Lista

      def initialize
        @ids = []
        test_localizado = true
        test_localizado = true
        if TEST && test_localizado
          @ids = [
            {url: 'rojas_sanroman.html'},
            # {url: 'castilla_garcia.html'},
            # {url: 'hinojosa_molina.html'}, #no tiene teléfono pero si header
            # {url: 'olvera_hernandez.html'}, #olvidaron ponerle header a un pedo
            # {url: 'gonzalez_yanez.html'}, #trs semi-vacíos
            # {url: 'lara_calderon.html'}, #tr inutil en comisiones
            # {url: 'castrejon_morales.html'}, #blog
            # {url: 'agundis_arias.html'},
            # {url: 'zepeda_martinez.html'},
            # {url: 'urbina_bedolla.html'},
            # {url: 'aparicio_espinosa.html'},
            # {url: 'soto_espino.html'},
          ]
        else
          request(Edomex.endpoints[:lista]) do |data|
            dom = Nokogiri::HTML(data)
            @ids = dom.css('a.Texto').to_a.map {|a| {url: a.attr('href')} }
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

  end #Edomex

end #Parser