module Parser

  module NuevoLeon

    class Comision

      # No están en el listado de diputados activos porque es 2015 y no hay como actualizar páginas
      # están hechas en piedra, porque los cerebros de estos batos están hechos de caca
      ZOQUETES_QUE_NO_EXISTEN = [
        'jesus-guadalupe-hurtado-rodriguez', #suplente
        'juan-antonio-rodriguez-gonzalez', #suplente
        'rocio-isabel-santos-chapoy', #suplente todavía no está en el sistema
      ]

      # Como no hemos inventado bases de datos, estos zoquetes escribieron mal o incompleto
      # los nombres de los integrantes de comisiones
      ZOQUETES_QUE_SI_EXISTEN = {
        'imelda-guadalupe-alejandro' => 'imelda-guadalupe-alejandro-de-la-garza',
        'celina-del-carmen-hernandez' => 'celina-del-carmen-hernandez-garza',
        'ernesto-jose-quintanilla-flores' => 'ernesto-jose-quintanilla-villarreal', #mi favorito.
        'oscar-flores-trevino' => 'oscar-alejandro-flores-trevino'
      }

      attr_accessor :requests

      def stub text
        I18n.transliterate(text).downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')
      end

      def initialize

        Actor.where({camara: :local, entidad: NuevoLeon.id_entidad}).update_all(puestos: [])

        @requests = []
        requester = Crawler.new NuevoLeon.endpoints[:pre_comisiones]
        requester.requests = [{url: 'comisiones'}, {url: 'comisiones_especiales'}]

        Log.info "Buscando urls de comisiones"
        # test_localizado = true
        if TEST && defined? test_localizado
          @requests = [
            {url: 'comisiones_especiales/comision_especial_del_derrame_petrolero_en_el_rio_san_juan_en_el_municipio_de_cadereyta_jimenez_nuev/'}
          ]
        else
          requester.run do |response, request|
            doc = Nokogiri::HTML(response.body)
            doc.encoding = 'utf-8'

            @requests += doc.css('.listamenu a').select {|link|
              link.text.squish != '' #porque empty <a> FTW!
            }.map {|link|
              {url: link.attr('href').split('/').last(2).join('/')+'/'}
            }
          end
        end
      end

      # Estos batos neta no saben usar un CMS
      def parse_integrantes dom
        integrantes = []

        if table = dom.at_css('table')
          table.css('tr').each do |row|
            cols = row.css('td')

            puesto = cols[0].text.downcase.gsub(':', '').squish
            chatoa = cols.last.text.squish #por eso de que hay luego dos y luego tres

            fkey = stub(chatoa.gsub(/^dip.?\s+/i, ''))
            next if ZOQUETES_QUE_NO_EXISTEN.include? fkey
            fkey = ZOQUETES_QUE_SI_EXISTEN[fkey] if ZOQUETES_QUE_SI_EXISTEN.include? fkey

            actor = Actor.where("meta.stub" => fkey).first
            raise "no encontré al actor #{fkey}" unless actor

            integrantes << {
              puesto: puesto,
              actor: actor
            }
          end
        elsif spans = dom.css('.Apple-tab-span') #porque lo hicieron en Mail.app?
          spans.each do |span|
            puesto, nombre = span.parent.text.squish.split(':')


            if nombre
              fkey = stub(nombre.squish.gsub(/^dip.?\s+/i, ''))
            else
              puts "ignorando integrante: [#{span.parent}]"
              next
            end

            next if ZOQUETES_QUE_NO_EXISTEN.include? fkey
            fkey = ZOQUETES_QUE_SI_EXISTEN[fkey] if ZOQUETES_QUE_SI_EXISTEN.include? fkey

            actor = Actor.where("meta.stub" => fkey).first
            raise "no encontré al actor #{fkey}" unless actor

            integrantes << {
              puesto: puesto.downcase.gsub(':', '').squish,
              actor: actor
            }

          end
        else
          raise "WTF?"
        end
        integrantes
      end


      def parse body, request
        doc = Nokogiri::HTML(body)
        doc.encoding = 'utf-8'

        nombre = doc.at_css('h1').text.squish
        integrantes = parse_integrantes(doc)
        comision = {
          camara: 'local',
          entidad: NuevoLeon.id_entidad,
          nombre: nombre,
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now,
            stub: I18n.transliterate(nombre).downcase.gsub(' ', '-')
          },
          integrantes: integrantes.map {|integrante| integrante[:actor] }
        }

        yield comision


        if TEST
          Log.debug("puestos:")
          Log.debug(integrantes.map {|item| item[:actor] = item[:actor].id.to_s; item})
        else
          comision = ::Comision.where("meta.fkey" => request[:url]).first
          integrantes.each do |integrante|
            actor = integrante[:actor]
            actor.puestos << Puesto.new({
              puesto: integrante[:puesto],
              comision: comision
            })
            actor.save!
          end
        end

      end

    end

  end #/NuevoLeon
end