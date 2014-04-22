#!/usr/bin/env ruby
# encoding: utf-8
module Parser

  module Senado

    class Comision
      attr_accessor :requests

      def initialize
        #1=ordinarias, 3, especiales
        @requests = [{id: 1}, {id: 3}]
        @telefono = ''
      end

      def parse data, request
        doc = Nokogiri::HTML(data)
        doc.encoding = 'utf-8'
        
        doc.css('table[width="99%"] tr').each_with_index do |com, index|
          if index==0
            cell = com.at_css('td:nth-child(3)')
            @telefono = cell.text.gsub(/\D/, '')
            next
          end

          cols = com.css('td')
          next unless cols.count > 2

          fkey = Senado::endpoints[:base]+cols.at_css('.marco_3:last-child a').attr('href')

          comision = {
            meta: {
              fkey: fkey,
              lastCrawl: START
            },
            camara: 'senado',
            nombre: cols[1].text.squish,
            oficina: cols[2].text.squish,
            telefonos: []
          }

          extensiones = cols[3].text.squish

          if extensiones != ''
            extensiones.split(',').each do |ext|
              comision[:telefonos] << {numero: @telefono, extension: ext.squish}
            end
          end

          yield comision
        end
      end

    end #comision
  
  end #Senado

end