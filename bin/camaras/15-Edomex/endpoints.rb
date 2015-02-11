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
      distritos: 'http://www.ieem.org.mx/numeralia/msd/msd{{id}}.html',
      base: '',
      lista_comisiones: '',
      actor: '',
    }

  end

end