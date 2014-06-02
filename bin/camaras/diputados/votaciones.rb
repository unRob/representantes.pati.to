# encoding: utf-8
module Parser

  module Diputados

    class Votaciones

      @ids = []
      @@meses = [nil, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

      def self.test
        i = Votaciones.new
        html = File.open(File.expand_path('../votaciones.html', __FILE__), 'r:utf-8')
        pp i.parse_periodo(html)
      end

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
          abstencion: 0,
          periodos: {}
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
            votaciones[:periodos].merge!(result[:periodos])
          end
        end

        #Log.debug votaciones
        #exit
        
        return votaciones
      end

      def pad str
        str.to_s.rjust(2, '0')
      end

      def key_for str
        begin
          dia, mes, annum = str.downcase.split(' ')
        rescue Exception
          puts str
          exit
        end
        mes = @@meses.index(mes)
        "#{annum}-#{pad mes}-#{pad dia}"
      end

      def parse_periodo data

        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'
        res = {
          total: 0,
          a_favor: 0,
          en_contra: 0,
          ausente: 0,
          abstencion: 0,
          periodos: {}
        }


        primer_fecha = dom.at_css('.TitulosVerde')
        row = primer_fecha.parent
        fecha = key_for(row.text)

        while row = row.next
          next if row.text == ''
          if row.at_css('.TitulosVerde')
            fecha = key_for row.text
            next
          end
          
          next unless row.attr('valign') == 'top'

          text = row.at_css('td:last-child').text
          begin
            key = I18n.transliterate(text).downcase.gsub(' ', '_').to_sym
          rescue Exception
            puts text
            exit
          end
          
          res[:periodos][fecha] ||= {
            total: 0,
            a_favor: 0,
            en_contra: 0,
            ausente: 0,
            abstencion: 0
          }

          res[:total] +=1;
          res[:periodos][fecha][:total] += 1
          begin
            res[key] += 1
            res[:periodos][fecha][key] += 1
          rescue
            res[:abstencion] += 1
            res[:periodos][fecha][:abstencion] += 1
          end
        end

        res
      end

    end

  end

end