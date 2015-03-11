#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../../common.rb'
require 'roo'

# Datos de CEENL
# Texto de la petición:
# Busco que me puedan proporcionar una base de datos en un formato legible por
# computadoras (JSON, CSV, XML) en el cual se relacionen cada uno de los
# distritos electorales locales de Nuevo León, con todas las secciones
# electorales que los componen, siendo éstas últimas las correspondientes al
# catálogo que nombra el INE como "Marco Geográfico Nacional". Gracias!

distritos = {}
inexistentes = [14, 50, 53, 58, 60, 64, 65, 67, 77, 129, 149, 229, 248, 249, 250, 251, 254, 255, 302, 351, 353, 425, 428, 429, 439, 493, 500, 501, 525, 648, 836, 840, 850, 859, 905, 924, 926, 929, 955, 1640, 1729, 1747, 1748]
# 648 este si existe en el MGN 2012

xlsx = Roo::Spreadsheet.open(File.expand_path('./secciones.xlsx', File.dirname(__FILE__)))

xlsx.sheet(0).each do |row|
  next unless row[0].is_a? Float
  dto = row[5].to_i
  distritos[dto] ||= {
    id: "dl-19-#{dto}",
    tipo: :local,
    entidad: 19,
    secciones: []
  }

  distritos[dto][:secciones] << "19-#{row[4].to_i}"
end


min = 1
max = 0
impresos = []
distritos.each do |dto, data|
  secciones = data[:secciones].map {|s| s.split('-').last.to_i}
  impresos += secciones
  max = [secciones.max, max].max
  min = [secciones.min, min].min
end
impresos = impresos.sort

deben_ser = (min..max).to_a - inexistentes
if (impresos.count != deben_ser.count)
  faltan = deben_ser - impresos

  Log.error "Los zoquetes del CEENL olvidaron especificar a que distritos pertenecen las secciones #{faltan.join(',')}"
  exit
end

distritos.each do |id,dto|
  Distrito.create!(dto)
end

Log.info "#{distritos.values.count} Distritos locales creados"
Log.info "Las secciones #{inexistentes.join(',')} no se encuentran en el Marco Geográfico Nacional"