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
      actor: 'http://www.cddiputados.gob.mx/2/58/diputados/{{url}}',
      base: 'http://www.cddiputados.gob.mx/2/58/',
      distritos: 'http://www.ieem.org.mx/numeralia/msd/msd{{id}}.html',
      lista: 'http://www.cddiputados.gob.mx/2/58/diputados/indice_alfa2.html',
      lista_comisiones: 'http://www.cddiputados.gob.mx/3/58/organos/comisionesycomites/',
    }

  end

end