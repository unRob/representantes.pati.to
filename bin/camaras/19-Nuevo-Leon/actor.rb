module Parser
  module NuevoLeon

    class Actor

      def partido string
        p = string.downcase
        p = 'panal' if p == 'nueva alianza'
        p
      end

      def parse body, request
        actor = {
          meta: {
            fkey: request[:url],
            lastCrawl: Time.now
          },
          camara: 'local',
          entidad: NuevoLeon.id_entidad,
          distrito: nil,
          telefonos: [],
          links: [],
          puestos: []
        }

        dom = Nokogiri::HTML(body)
        dom.encoding = 'utf-8'
        container = dom.at_css('#individual')

        url_imagen = container.at_css('img').attr('src')
        actor[:imagen] = url_imagen unless url_imagen.match(/fotomientras\.jpg$/)

        h1 = container.at_css('h1').text
        nombre = h1.match(/diputad([oa])\s(.+)/i)

        if nombre != nil
          actor[:nombre] = nombre[2].squish
          actor[:genero] = nombre[1].downcase == 'o'
        else
          actor[:nombre] = h1.gsub('Dip. ', '').squish
          actor[:genero] = actor[:nombre].split(' ').first.reverse[0] != 'a' #HAAAAACK
        end
        actor[:genero] = actor[:genero] ? 1 : 0 if actor.include?(:genero)
        actor[:meta][:stub] = I18n.transliterate(actor[:nombre]).downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')

        continue = true
        count = 0
        node = container.at_css('div[style="height:40px;"]')
        kv = {}
        while continue
          node = node.next_sibling

          if node.name == "strong"
            count += 1
            key = node.text.downcase.gsub(':', '').squish
            node = node.next_sibling
            node = node.next_sibling if node.text.squish == ''
            kv[key] = node.text.squish
          end

          if count > 10 || node.name == 'div'
            continue = false
          end
        end

        kv.each do |k, v|
          k, v = case k
            when 'partido' then [k, partido(v)]
            when 'representación' then ['eleccion', v.downcase]
            when 'distrito electoral'
              dto = "dl-#{NuevoLeon.id_entidad}-#{v}"
              dto = "dl-#{NuevoLeon.id_entidad}-rp" if kv['representación'].downcase != 'mayoría relativa'
              ['distrito', dto]
            when 'teléfono'
              tels = actor[:telefonos] || []
              tel, ext = v.split(' Ext. ')
              tel = formatoTelefono(tel.gsub(/\D/, ''))
              tels << {numero: tel, extension: ext}
              ['telefonos', tels]
            when 'correo' then [k, v]
            else
              raise "No se como procesar #{key}"
          end

          actor[k.to_sym] = v
        end

        actor

      end #/parse

    end #/actor

  end
end
