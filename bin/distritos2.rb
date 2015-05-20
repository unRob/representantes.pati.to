#!/usr/bin/env ruby
# encoding: utf-8

require 'rubygems'
require 'bundler'

Bundler.require :development
require 'json'

require_relative './lib/log.rb'
require_relative './lib/http.rb'

def querySeccion entidad, seccion
  {
    e: entidad,
    q: seccion,
    t: 'seccion',
    c: 'SECCION',
    l: '0'
  }
end

def queryRango entidad
  {ent: entidad}
end

rangos = 'http://cartografia.ife.org.mx/sige/servicios/infogeo/pag/get_rango.php'

estados = Crawler.new rangos
estados.requests = (1..32).to_a.map do |entidad|
    {
      method: :post,
      headers: {
        'Content-type' => 'application/x-www-form-urlencoded'
      },
      body: queryRango(entidad)
    }
end

estados.run do |estado|
  puts estado
  exit
end

# secciones = 'http://cartografia.ife.org.mx/sige/ajax/get_searchv5'

# def poo
#   (1..32).each do |entidad|
#     yield entidad
#   end
# end

# poo do |e|
#   puts e
# end