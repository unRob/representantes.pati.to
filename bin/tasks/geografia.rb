module Secretario
  class Geografia < Thor

    SOURCE = "https://raw.githubusercontent.com/unRob/distritos-electorales-mx/master/data/"

    def self.description
      "Genera, descarga e ingesta distritos y secciones electorales"
    end


    desc "federal", "Descarga e ingesta los distritos electorales federales"
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


    desc "local (entidad)", "Descarga e ingesta los distritos locales de una entidad"
    long_desc <<-DESC
      Descarga e ingesta los distritos locales de la entidad
      especificada como un numero, o `todas` las disponibles.
    DESC
    def local entidad=nil
      if entidad == 'todas'
        raise "WIP :/"
      else
        seccion entidad.to_i
      end
    end


    desc "secciones", "Descarga e ingesta las secciones electorales"
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

        if entidad.is_a? Number
          nombre = Entidad[entidad]
          url = entidad.to_s.rjust(2,0)+"-"+I18n.transliterate(nombre)
        else
          id, nombre = entidad.split("-")
          url = entidad
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