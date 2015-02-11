# encoding: utf-8
module Parser

  module Aguascalientes

    def self.codigo_area
      '449'
    end

    def self.id_estado
      1
    end

    def self.endpoints
      @@endpoints
    end

    @@endpoints = {
      base: 'http://www.congresoags.gob.mx/congresoags/',
      lista_comisiones: 'http://www.congresoags.gob.mx/congresoags/diputados.php',
      actor: 'http://www.congresoags.gob.mx/congresoags/diputados.php',
      directorio: 'http://www.congresoags.gob.mx/congresoags/directorio.php'
    }

  end

end