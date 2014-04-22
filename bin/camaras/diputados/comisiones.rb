#!/usr/bin/env ruby
# encoding: utf-8
module Parser

  module Diputados

    class Comision
      attr_accessor :requests

      def initialize
        @requests = [{id: 1}, {id: 1}]
      end

      def parse data, request
        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'

        doc.css('table table tr').each do |row|
          next unless row.attr('bgcolor')

          link = row.at_css('a.linkVerde')
          cols = row.css('td')
          comision = {
            camara: 'diputados',
            meta: {
              fkey: Diputados.endpoints[:base]+link.attr('href'),
              lastCrawl: Time.now
            },
            nombre: link.text.squish,
            oficina: cols[1].text.squish
          }

          telefonos = []
          cols[2].text.gsub(%r{/.+$}, '').split(', ').each do |ext|
            telefonos << {numero: Diputados.telefonos[ext.length], extension: ext}
          end
          comision[:telefonos] = telefonos

          link = cols[3].at_css('a')
          comision[:link] = link.attr('href') if link

          yield comision
        end

      end

    end

  end #comision

end #parser