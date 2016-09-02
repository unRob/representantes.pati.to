module Secretario

  module Legislaturas

    @legislaturas = {}

    def self.registra options, &block
      camara = options[:camara]
      @legislaturas[camara] = Legislatura.new(options, &block)
    end

    def self.get camara
      @legislaturas[camara]
    end


    class Legislatura

      attr_reader :camara, :empieza, :termina, :entidad

      @setup = nil

      def initialize options, &setup
        @config = {}
        @camara  = options[:camara]
        @empieza = options[:empieza]
        @termina = options[:termina]
        @entidad = options[:entidad]
        @setup = setup
        @listas = {actores: [], comisiones: []}
      end


      def setup
        self.instance_eval(&@setup)
      end


      def lista tipo, urls
        @listas[tipo] = urls
      end

      def comisiones
        @listas[:comisiones]
      end

      def actores
        @listas[:actores]
      end


      def set key, value
        @config[key.to_sym] = value
      end


      def respond_to? method, including_private=false
        @config.has_key?(method) || super(method, including_private)
      end


      def method_missing method, *args, &block
        if @config.has_key? method
          @config[method]
        else
          super method, *args, &block
        end
      end

    end

  end
end