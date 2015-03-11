# encoding: utf-8
module Parser

  module NuevoLeon

    def self.id_entidad
      19
    end

    def self.endpoints
      @@endpoints
    end

    @@endpoints = {
      actor: 'http://www.hcnl.gob.mx/organizacion/{{id}}',
      base: 'http://www.hcnl.gob.mx/',
      lista: 'http://www.hcnl.gob.mx/organizacion/distritos.php',
      pre_comisiones: 'http://www.hcnl.gob.mx/organizacion/{{url}}.php',
      lista_comisiones: 'http://www.hcnl.gob.mx/organizacion/{{url}}',
    }

  end

end