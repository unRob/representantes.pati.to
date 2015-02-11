#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../../common.rb'
require 'pdf-reader'

# PDF de http://www.ieeags.org.mx/detalles/archivos/cartografia/cartografia_2012.pdf
download = 'http://www.ieeags.org.mx/detalles/archivos/cartografia/cartografia_2012.pdf'
tmp = './cartografia_2012.pdf'

unless File.exists? tmp

  Log.info "Descargando listado de rangos de secciones"
  Log.debug "URL: #{download}"
  require 'open-uri'
  dl = open(download)
  File.open(tmp, 'wb+') do |t|
    t << dl.read
  end

  Log.info "Temporal guardado en #{tmp}"
end

reader = PDF::Reader.new(tmp)

distritos = {}
expDis = /^\s+(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\s+(\d{3})/

# reader.pages.first.text.scan(expDis).each do |match|

# end
reader.pages.each do |page|
  page.text.scan(expDis).each do |match|
    begin
      dto = match[1]
      dto = match[0] if match[1] == ""
      dto = dto.to_arabigo
      seccion = match[2].to_i
    rescue
      Log.error "#{match}"
      next
    end
    distritos[dto] ||= []
    distritos[dto] << seccion
  end
end

count = 0
distritos.each do |k,v|
  Distrito.create!({
    _id: "dl-1-#{k}",
    tipo: :local,
    entidad: 1,
    secciones: v.uniq
  })
  count += 1
end

Log.info "#{distritos.count} Distritos locales creados"