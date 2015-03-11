module Parser
  module NuevoLeon

    class Lista

      def initialize
        @ids = []

        #test_localizado = true
        if TEST && defined? test_localizado
          @ids = [
            {id: 'pan/dip_julio_cesar_ramirez_cepeda/'}, #info extra en kv
            # {id: 'pri/diputado_gerardo_juan_garcia_elizondo/'},
          ];
        else
          request(NuevoLeon.endpoints[:lista]) do |data|
            data = data.gsub(/id="ubicaa"/, 'class="los-ids-son-unicos-zoquetazos"')
            dom = Nokogiri::HTML(data)
            @ids = dom.css('.los-ids-son-unicos-zoquetazos a').map {|a|
              {id: a.attr('href').split('/').last(2).join("/")+'/' }
            }
          end
        end
      end

      def to_a
        @ids
      end

      def count
        @ids.count
      end

    end

  end
end
