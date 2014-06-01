# encoding: utf-8
module Parser

  module Diputados

    def self.endpoints
      @@endpoints;
    end

    def self.telefonos
      @@telefonos
    end

    @@endpoints = {
      base: 'http://sitl.diputados.gob.mx/LXII_leg/',
      lista: 'http://sitl.diputados.gob.mx/LXII_leg/listado_diputados_gpnp.php?tipot=TOTAL',
      actor: 'http://sitl.diputados.gob.mx/LXII_leg/curricula.php?dipt={{id}}',
      telefonos: 'http://archivos.diputados.gob.mx/directorio/resultado.php?nombre=Dip.',
      lista_comisiones: 'http://sitl.diputados.gob.mx/LXII_leg/listado_de_comisioneslxii.php?tct={{id}}', #1 ordinaria, #2 especiales
      asistencias: 'http://sitl.diputados.gob.mx/LXII_leg/asistencias_diputados_xperiodonplxii.php?dipt={{id}}',
      votaciones: 'http://sitl.diputados.gob.mx/LXII_leg/votaciones_diputados_xperiodonplxii.php?dipt={{id}}'
    }

    @@telefonos = {
      4 => "56281300",
      5 => "50363000"
    }

  end
end