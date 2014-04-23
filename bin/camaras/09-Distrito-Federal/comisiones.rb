#!/usr/bin/env ruby
# encoding: utf-8
module Parser

  module DistritoFederal

    class Comision
      attr_accessor :requests

      def initialize
        @requests = [{url: 'comisiones-106-2.html'}, {url: 'comisiones-especiales-106-3.html'}]
      end

      def parse data, request
        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'

        doc.css('strong a').each do |link|
          comision = {
            camara: 'local',
            entidad: 9,
            meta: {
              fkey: DistritoFederal.endpoints[:base]+link.attr('href'),
              lastCrawl: Time.now
            },
            integrantes: [],
            nombre: link.text.squish
          }

          yield comision
        end
      end

    end #comision

  end #DistritoFederal

end #Parser