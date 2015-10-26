module Secretario
  class Db < Thor

    def self.description
      "Trabaja con la base de datos"
    end

    desc "index", "Inicializa la base de datos"
    def setup
      Db.load!
      Actor.create_indexes
      Comision.create_indexes
      Distrito.create_indexes
      Seccion.create_indexes
      Legislatura.create_indexes
    end


    def self.load!
      Bundler.require :datasource
      settings = YAML.load File.read(Secretario.full_path :app, %w{config database.yml})

      Mongoid.configure do |config|
        config.sessions = settings[ENV['RACK_ENV'].to_sym][:mongodb][:sessions]
      end

      Secretario.require_dir Secretario.full_path(:app, 'models')
    end

  end
end