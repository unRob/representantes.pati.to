# encoding: utf-8
module Parser

  module Senado

    class Votaciones

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

        votaciones = {
          total: 0,
          a_favor: 0,
          en_contra: 0,
          ausente: 0,
          abstencion: 0
        }

        dom.css('#contenido_informacion tbody > tr').each do |row|
          tds = row.css('td')
          next unless tds.count == 2
          text = I18n.transliterate(tds[1].text).downcase.gsub('comision oficial', '').strip
          key = text.gsub(' ', '_').to_sym

          key = :a_favor if key == :en_pro
          votaciones[:total] += 1
          begin
            votaciones[key] += 1
          rescue Exception => e
            puts key
            exit
          end
        end

        
        return votaciones
      end

    end

  end

end