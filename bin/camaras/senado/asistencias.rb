# encoding: utf-8
module Parser

  module Senado

    class Asistencias

      @ids = []

      def initialize
        @ids = []
        actores = ::Actor.where({camara: 'senado'})#, inasistencias: nil})
        actores.each do |actor|
          fid = actor.meta.fkey.scan(/id=(\d+)/).flatten[0]
          @ids << {id: fid, actor: actor}
        end

        $hydra = Typhoeus::Hydra.new(max_concurrency: 1)
      end

      def lista
        @ids
      end

      def parse data, request
        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'

        asistencias = {
          sesiones: 0,
          total: 0,
          periodos: {}
        }

        dom.css('td[width="70%"]').each do |tr|
          row = tr.parent
          fecha = row.css('a').attr('href').text.scan(/f=(.+)/).flatten[0]
          falta = row.css('td:last-child').text =~ /ausente/i

          asistencias[:sesiones] += 1
          
          asistencias[:periodos][fecha] ||= 0
          if falta
            asistencias[:total] += 1
            asistencias[:periodos][fecha] += 1 
          end
        end

        asistencias[:periodos] = Hash[asistencias[:periodos].sort]


        return asistencias
      end

    end #class

  end #senado

end #parser