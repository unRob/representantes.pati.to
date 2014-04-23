# encoding: utf-8
module Parser

  module DistritoFederal

    def self.endpoints
      @@endpoints;
    end

    @@endpoints = {
      base: 'http://www.aldf.gob.mx/',
      lista: 'http://www.aldf.gob.mx/orden-alfabetico-105-2.html',
      actor: 'http://www.aldf.gob.mx/{{url}}',
      lista_comisiones: 'http://www.aldf.gob.mx/{{url}}'
    }

  end
end