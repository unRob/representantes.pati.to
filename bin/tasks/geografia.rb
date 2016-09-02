module Secretario
  class Geografia < Thor

    # De dónde sacamos la información?
    # SOURCE=otro/repo/de/github secretario geografia ...
    SOURCE = ENV['SOURCE'] || "https://raw.githubusercontent.com/unRob/distritos-electorales-mx/master/data/"

    def self.description
      "Genera, descarga e ingesta distritos y secciones electorales"
    end


    desc "federal", "Descarga e ingesta los distritos electorales federales"
    long_desc <<-DESC
      Descarga e ingesta los distritos federales y las circunscripciones

      ejemplo:
        secretario geografia federal
    DESC
    def federal
      bundle!
      data = fetch('distritos/federales/_todos.json')
      data.each do |id, entidad|
        secciones_senado = []

        entidad[:distritos].each do |id_dto, dto|
          secciones = dto[:secciones].map {|s| "#{id}-#{s}" }
          secciones_senado += secciones

          ::Distrito.create({
            entidad: id,
            _id: "df-#{id}-#{id_dto}",
            tipo: 'federal',
            secciones: s
          })
        end

        ::Distrito.create({
          _id: "sf-#{id}",
          entidad: id,
          tipo: 'federal',
          secciones: secciones_senado
        })
      end
    end


    desc "local [ENTIDAD]", "Descarga e ingesta los distritos locales de una entidad"
    long_desc <<-DESC
      Descarga e ingesta los distritos locales de la entidad
      especificada como un numero, o `todas` las disponibles.

      ejemplo:
        secretario geografia local 09-distrito-federal
        secretario geografia local 9
        secretario geografia local todas
    DESC
    def local entidad=nil
      if entidad == 'todas'
        (1..Entidad.todas.count).each { |id|
          seccion index
        }
      else
        seccion entidad
      end
    end


    desc "secciones", "Descarga e ingesta las secciones electorales"
    long_desc <<-DESC
      Descarga e ingesta las secciones electorales que agrupan los distritos

      ejemplo:
        secretario geografia secciones
    DESC
    def secciones
      bundle!
      entidades = Entidad.todas.each_with_index.map {|e, index|
        [(index+1).rjust(2, '0'), I18n.transliterate(e)]
      }

      entidades.each do |entidad|
        fetch("secciones/#{entidad}.json").each do |seccion|
          ::Seccion.create(seccion)
        end
      end
    end


    desc "disponible", "Lista las geografías electorales disponibles"
    option 'no-cache', type: :boolean, aliases: :C, banner: "Deshabilita el cache"
    long_desc <<-DESC
      Lista las geografías electorales disponibles

      ejemplo:
        secretario geografia disponible
    DESC
    def disponible
      cache = Secretario.full_path(:tmp, "geografias.json")
      if options[:"no-cache"] || !File.exists?(cache)
        data = fetch('index.json')
        unless options[:"no-cache"]
          File.open(cache, 'w+') do |f|
            f << data.to_json
          end
        end
      else
        data = JSON.parse(File.read(cache), symbolize_names: true)
      end

      friendly = ->(id, s) {
        "#{id}: #{Entidad[id.to_s.to_i]}"
      }


      puts set_color("Geografías electorales disponibles:", :white)
      puts <<-BANNER

- #{set_color("Secciones Electorales Federales", :bold)}
  #{data[:secciones].map(&friendly).join("\n  ")}

- #{set_color("Distritos", :bold)}
  - federales
  - locales
    #{data[:distritos][:locales].map(&friendly).join("\n    ")}
BANNER
    end


    no_commands {
      def bundle!
        Bundler.require :datasource, :development
      end

      def repo_url path
        SOURCE + path
      end

      def fetch url
        HTTP.get(repo_url(url), expecting: :json)
      end

      def seccion entidad
        bundle!

        case entidad.to_s
          when /^\d+$/
            # 09, 9 < numero
            nombre = Entidad[entidad.to_i]
            id = entidad.rjust(2,0)
            url = id+"-"+I18n.transliterate(nombre)
          when /^\d+-([^\s]+)$/
            # 09-distrito-federal < filename
            id, nombre = entidad.split("-", 2)
            url = entidad
          end
        end

        data = fetch("distritos/#{url}/_todos.json")

        data[:distritos].each do |id_dto, dto|
          secciones = dto[:secciones].map {|s| "#{id}-#{s}" }
          secciones_senado += secciones

          ::Distrito.create({
            entidad: id,
            _id: "df-#{id}-#{id_dto}",
            tipo: 'federal',
            secciones: s
          })
        end
      end
    }

  end
end