# encoding: utf-8
module Parser

  module Diputados

    class Votaciones

      @ids = []

      def initialize
        @ids = []
        actores = ::Actor.where({camara: 'diputados'})#, votaciones: nil})
        actores.each do |actor|
          fid = actor.meta.fkey.gsub(/\D/, '')
          #next unless fid == '139'
          @ids << {id: fid, actor: actor}
        end

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

        dom.css('.linkVerde').each do |link|
          url = Parser::Diputados.endpoints[:base]+link.attr('href')
          #Log.debug url 
          request(url) do |res|
            result = self.parse_periodo(res)
            votaciones[:total] += result[:total]
            votaciones[:a_favor] += result[:a_favor]
            votaciones[:en_contra] += result[:total]
            votaciones[:ausente] += result[:ausente]
          end
        end

        #Log.debug votaciones
        #exit
        
        return votaciones
      end

      def parse_periodo data

        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'
        res = {
          total: 0,
          a_favor: 0,
          en_contra: 0,
          ausente: 0,
          abstencion: 0
        }



        dom.css('tr[valign=top]').each do |votacion|
          align = votacion.attr('align')
          next if align && align == 'center'
          text = votacion.at_css('td:last-child').text
          key = I18n.transliterate(text).downcase.gsub(' ', '_').to_sym
          res[:total] += 1
          begin
            res[key] += 1
          rescue
            res[:abstencion] += 1
          end
        end

        res
      end

    end

  end

end