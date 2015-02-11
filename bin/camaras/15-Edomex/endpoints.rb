# encoding: utf-8
module Parser

  module Edomex

    def self.id_entidad
      15
    end

    def self.endpoints
      @@endpoints
    end

    @@endpoints = {
      actor: 'http://www.cddiputados.gob.mx/2/58/diputados/{{stub}}.html',
      base: 'http://www.cddiputados.gob.mx/2/58/',
      distritos: 'http://www.ieem.org.mx/numeralia/msd/msd{{id}}.html',
      lista: 'http://www.cddiputados.gob.mx/2/58/diputados/indice_alfa2.html',
      lista_comisiones: '',
    }

  end

end