# encoding: utf-8
module Parser

  module Diputados

    class Asistencias

      @ids = []
      @@meses = [nil, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


      def initialize
        @ids = []
        where = {camara: 'diputados'}
        #where[:inasistencias] = nil
        #where = {
        #  :"meta.fkey" => {'$in' => %w{http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt=7 http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt=104 http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt=39 http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt=408} }
        #}
        actores = ::Actor.where(where)
        actores.each do |actor|
          fid = actor.meta.fkey.gsub(/\D/, '')
          @ids << {id: fid, actor: actor}
        end
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

        dom.css('.linkVerde').each do |link|
          request(Parser::Diputados.endpoints[:base]+link.attr('href')) do |res|
            result = self.parse_periodo(res)
            asistencias[:total] += result[:total]
            asistencias[:sesiones] += result[:sesiones]
            asistencias[:periodos].merge!(result[:periodos])
          end
        end

        #Log.debug asistencias

        return asistencias
      end

      def parse_periodo data

        dom = Nokogiri::HTML(data)
        dom.encoding = 'utf-8'
        res = {
          sesiones: 0,
          total: 0,
          periodos: {}
        }

        dom.css('table[bordercolorlight="#F2F2F2"]').each do |mes|

          begin
            mm, yyyy = mes.at_css('.TitulosVerde').text.strip.split(' ')
            mm = @@meses.index(mm.downcase).to_s.rjust(2, '0')
          rescue Exception => e
            Log.error("Ni idea que pedo con este pedo")
            raise e
            exit
            next
          end

          base = "#{yyyy}-#{mm}"
         
          
          dias = mes.css('td[bgcolor="#D6E2E2"]')
          if dias.count == 0
            next
          end

          total_periodo = 0
          dias.each do |dia|
            dia,asistencia = dia.css('div font').inner_html.split('<br>')
            fue = true
            if asistencia.match(/(AC|I\b|IV)/)
              total_periodo += 1
              fue = false
            end
            res[:periodos]["#{base}-#{dia.rjust(2,'0')}"] = fue
          end

          res[:sesiones] += dias.count
          res[:total] += total_periodo
          
        end

        res
      end

    end

  end

end