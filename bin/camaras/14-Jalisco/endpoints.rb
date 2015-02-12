# encoding: utf-8
module Parser

  module Jalisco

    def self.id_entidad
      14
    end

    def self.endpoints
      @@endpoints
    end

    @@endpoints = {
      actor: 'http://www.congresojal.gob.mx/congresojalV2/LX/diputados/perfil?id_dip={{id}}',
      base: 'http://www.congresojal.gob.mx/congresojalV2/LX/',
      distritos: 'http://www.iepcjalisco.org.mx/api/geografia-electoral.php',
      lista: 'http://www.congresojal.gob.mx/congresojalV2/LX/?q=diputados',
      lista_comisiones: 'http://www.congresojal.gob.mx/congresojalV2/LX/?q={{id}}',
      lista_comites: 'http://www.congresojal.gob.mx/congresojalV2/LX/?q=diputados/comites'
    }

  end

end