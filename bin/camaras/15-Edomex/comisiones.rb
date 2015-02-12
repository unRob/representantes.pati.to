module Parser

  module Edomex

    class Comision

      attr_accessor :requests

      def initialize
        @requests = [{url: 'comisionesycomites/'}]
      end

      def parse body, request

        dom = Nokogiri::HTML(body)
        dom.encoding = 'utf-8'
        dom.css('.TextoSecciones a').each do |link|
          nombre = link.text.gsub(/[^\s[:alpha:]]/, '').squish.gsub(/^de(\sla)?\s/i, '')
          next if nombre == ''
          yield({
            camara: 'local',
            entidad: Edomex.id_entidad,
            meta: {
              fkey: request[:url]+link.attr('href'),
              lastCrawl: Time.now,
              stub: I18n.transliterate(nombre).downcase.gsub(' ', '-')
            },
            integrantes: [],
            nombre: nombre
          })
        end
      end

    end

  end #/Edomex

end