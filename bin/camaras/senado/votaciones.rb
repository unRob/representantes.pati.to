# encoding: utf-8
module Parser

  module Senado

    class Votaciones

      @ids = []
      @@meses = [nil, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

      def self.test
        i = Votaciones.new 'test'
        html = File.open(File.expand_path('../votaciones.html', __FILE__), 'r:utf-8')
        pp i.parse(html)
      end

      def initialize test=false
        if test
          @ids = []
          return
        end
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


      def pad str
        str.to_s.strip.rjust(2, '0')
      end

      def key_for str
        begin
          dia, mes, annum = str.strip.downcase.split(',')[1].split(' de ')
        rescue Exception
          puts str
          exit
        end
        mes = @@meses.index(mes)
        "#{annum}-#{pad mes}-#{pad dia}"
      end


      def parse data, request=false
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

        row = dom.at_css('td[colspan="2"]').parent
        fecha = ''

        while row = row.next
          tds = row.css('td')
          if tds.count == 1

            if row.text =~ /201[2345]/
              fecha = key_for row.text
            end

            next
          end

          next if tds.text == ''

          text = I18n.transliterate(tds[1].text).downcase.gsub('comision oficial', '').strip
          key = text.gsub(' ', '_').to_sym

          key = :a_favor if key == :en_pro

          votaciones[:total] += 1
          votaciones[:periodos][fecha] ||= {
            total: 0,
            a_favor: 0,
            en_contra: 0,
            ausente: 0,
            abstencion: 0
          }

          votaciones[:periodos][fecha][:total] += 1


          begin
            votaciones[key] += 1
            votaciones[:periodos][fecha][key] += 1
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