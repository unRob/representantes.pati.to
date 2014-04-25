# encoding: utf-8

require_relative '../../common.rb'
require 'roo'
require 'spreadsheet'

download = 'http://www.iedf.org.mx/transparencia/art.19/19.f.05/19.f.05.rangos.2013.xls'

tmp = './db.xls'

unless File.exists? tmp

  Log.info "Descargando listado de rangos de secciones"
  Log.debug "URL: #{download}"
  require 'open-uri'
  dl = open(download)
  File.open(tmp, 'w+') do |t|
    t << dl.read
  end

  Log.info "Temporal guardado en #{tmp}"
end

xls = Roo::Spreadsheet.open(tmp)

distritos = {}
started = false
int = nil

def secciones str
  if str =~ /-/
    ret = []
    start, stop = str.split('-')
    ret = (start.to_i..stop.to_i).map { |i|
      "9-#{i}"
    }
  else
    ret = ["9-#{str.to_i}"]
  end

  ret
end

xls.sheet(0).each do |d|
  
  data = d.slice(3,3)
  unless started
    started = (data[0] == 'Distrito')
    if started
      Log.debug 'Encontré header row'
    end
    next
  end 

  next unless data[1]

  if data[0]
    int = data[0].to_arabigo
    puts "Distrito #{int} #{data[0]}"
    distritos[int] ||= {
      _id: "dl-9-#{int}",
      tipo: :local,
      entidad: 9,
      secciones: []
    }
  end
  distritos[int][:secciones] += secciones(data[1])
end

count = 0
distritos.each do |id, distrito|
  Distrito.create! distrito
  count += 1
end

Log.info "#{count} Distritos locales creados"
