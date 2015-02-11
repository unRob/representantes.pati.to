#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../../common.rb'

# Datos de http://www.ieeags.org.mx/detalles/archivos/cartografia/cartografia_2012.pdf

# unless File.exists? tmp

#   Log.info "Descargando listado de rangos de secciones"
#   Log.debug "URL: #{download}"
#   require 'open-uri'
#   dl = open(download)
#   File.open(tmp, 'wb+') do |t|
#     t << dl.read
#   end

#   Log.info "Temporal guardado en #{tmp}"
# end

distritos = {}
inexistentes = []
File.open(File.expand_path('../raw.txt', __FILE__)) do |f|
  f.each_line do |line|
    if line =~ /^#/
      inexistentes += line.gsub(/[^\d,]/, '').split(',').map {|s| s.to_i}
      next
    end
    dto, secciones = line.split(/\s+/)
    dto = dto.to_arabigo
    distritos[dto] = secciones.split(',').map {|range|
      from,to = range.split '-'
      if to
        (from.to_i..to.to_i).to_a
      else
        from.to_i
      end
    }.flatten
    if distritos[dto].include? 0
      puts dto
    end
  end

end

min = 1
max = 0
impresos = []
distritos.each do |dto, secciones|
  impresos += secciones
  max = [secciones.max, max].max
  min = [secciones.min, min].min
end
impresos = impresos.sort

deben_ser = (min..max).to_a - inexistentes
if (impresos.count != deben_ser.count)
  faltan = impresos - deben_ser

  Log.error "Los zoquetes del IEEAGS olvidaron especificar a que distritos pertenecen las secciones #{faltan.join(',')}"
  exit
end

count = 0
distritos.each do |k,v|
  data = {
    _id: "dl-1-#{k}",
    tipo: :local,
    entidad: 1,
    secciones: v.map {|s| "1-#{s}"}
  }
  # puts data
  Distrito.create!(data)
  count += 1
end

Log.info "#{distritos.count} Distritos locales creados"
Log.info "Las secciones #{inexistentes.join(',')} no se encuentran en el Marco Geográfico Nacional"