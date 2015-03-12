# encoding: utf-8
module Parser

  module Veracruz

    def self.id_entidad
      30
    end

    def self.endpoints
      @@endpoints
    end

    @@endpoints = {
      actor_ish: 'http://www.legisver.gob.mx/?p=mapaDistrito&idDiputado={{id}}',
      actor: 'http://www.legisver.gob.mx/?p=dip&leg={{url}}',
      base: 'http://www.legisver.gob.mx',
      lista: 'http://www.legisver.gob.mx/?p=dip&leg=63',
      lista_comisiones: 'http://www.legisver.gob.mx/?p={{url}}',
    }

  end

end