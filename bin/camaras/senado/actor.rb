# encoding: utf-8
module Parser

  module Senado

    class Actor

      def parse html, request
        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'senado',
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }
        doc = Nokogiri::HTML(html)
        doc.encoding = 'utf-8'

        data = doc.at_css('#contenido_informacion')
        imgs = data.css('div[align=center] > img')

        entidad = imgs[2].attr('alt').downcase
        if entidad == 'lista nacional'
          entidadNum = nil
        else
          entidadNum = $entidades.index(entidad)+1
        end

        actor[:partido] = imgs[0].attr('alt').downcase
        actor[:partido] = nil if actor[:partido] == 'sg'
        actor[:entidad] = entidadNum
        actor[:distrito] = "sf-#{entidadNum || 'ln'}" #lista nacional
        actor[:tipo_distrito] = "federal"

        img_url = imgs[1].attr('src')
        actor[:imagen] = Parser::Senado::endpoints[:base]+img_url
        
        lineas = data.at_css('h3').inner_html.split '<br>'

        begin
          actor[:nombre] = lineas[0].gsub(/SEN.\s+/, '').strip.mb_chars.titleize.to_s.gsub(/\s{2,}/, ' ')
        rescue Exception => err
          puts err
          puts request
          puts lineas
          exit
        end
        ultima = lineas.last
        if ultima.match(/senador/i)
          actor[:genero] = ultima.scan(/senadora/i).count > 0 ? 0 : 1
          actor[:eleccion] = ultima.scan(/principio de (.+)/i).flatten[0].mb_chars.downcase.to_s
        else
          actor[:eleccion] = 'lista nacional'
        end

        info = data.css('table table')
        
        social = info[1].css('div[align=center] a')
        if social
          social.each do |red|
            link = red.attr('href')
            nombre = link.gsub(%r{https?://(www\.)?}, '').split('.')[0]
            actor[:links] << {servicio: nombre, url: link}
          end
        end

        actor[:suplente] = info[1].at_css('td[colspan="3"] div[align=left]').text.strip.gsub('Suplente: ', '').squish
        
        contacto = data.css('.expande')
        contacto = contacto.inner_html.split('<br>')
        
        if contacto.count > 0
          
          actor[:correo] = contacto.pop.split(': ')[1]
          ext = contacto.pop.gsub('Ext. ', '').split(', ')
          numero = contacto.pop.split(': ')[1].gsub(/\s/, '')
          
          ext.each do |e|
            actor[:telefonos] << {numero: numero, extension: e}
          end

        end

        data.css(' > div[align=left]').each do |bloque|
          tipo = bloque.css('> strong').text.squish

          next unless tipo != ''
          tipo = tipo.gsub(/[\(:].*/, "").downcase

          bloque.css('a').each do |comision|
            cid = Parser::Senado.endpoints[:base]+comision.attr('href')
            obj_comision = Comision.where({"meta.fkey" => cid }).first
            next unless obj_comision
            actor[:puestos] << {puesto: tipo.to_sym, comision: obj_comision}
          end
          
        end

        actor
      end

    end

  end #senado

end #parser