module Secretario
  class Representantes < Thor

    def self.description
      "Trabaja con loas representantes"
    end

    Secretario.require_dir Secretario.full_path(:root, ['bin', 'camaras'])

    desc "legislatura [CAMARA]", "Actualiza las "
    def legislatura camara

    end


    desc "comisiones [CAMARA]", "Actualiza las comisiones de [CAMARA]"
    option :list, type: :boolean, aliases: "-l", default: false
    def comisiones camara
      legislatura = Legislaturas.get(camara)
      legislatura.setup
      if options[:list]
        puts legislatura.comisiones.join("\n")
        exit
      end
    end


    desc "actores [CAMARA]", "Actualiza loas actores de [CAMARA]"
    option :list, type: :boolean, aliases: "-l", default: false
    def actores camara
      legislatura = Legislaturas.get(camara)
      legislatura.setup
      if options[:list]
        puts legislatura.actores.join("\n")
        exit
      end
    end


    desc "votaciones [CAMARA]", "Actualiza las votaciones de [CAMARA]"
    def votaciones camara
    end


    desc "asistencias [CAMARA]", "Actualiza las asistencias de [CAMARA]"
    def asistencias camara
    end


    no_commands {

    }

  end
end