require_relative '../../common.rb'
require_relative './endpoints'
$entidad = Parser::Veracruz.id_entidad

require 'pdf-reader'

inexistentes = [195,196,816,866,966,2324,2330,2350,2890,3429,3675,3678,3679,3689,3697,3698,4229,4382]

reader = PDF::Reader.new(File.expand_path('./secciones.pdf', File.dirname(__FILE__)))

text = ''
reader.pages.each do |page|
  text += page.text+"\n"
end

lines = text.split "\n"
lines.shift #headers

distritos = {}
lines.each do |line|
  line = line.strip
  next if line == ''
  data = line.split(/\s+/)
  dto = data[1]
  distritos[dto] ||= []
  distritos[dto] << data.last.to_i
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

  Log.error "Los zoquetes del IEV olvidaron especificar a que distritos pertenecen las secciones #{faltan.join(',')}"
  exit
end

distritos.each do |id,secciones|
  distrito = {
    _id: "dl-#{$entidad}-#{id}",
    tipo: :local,
    entidad: $entidad,
    secciones: secciones.sort.map {|s| "#{$entidad}-#{s}"}
  }
  Distrito.create!(distrito)
end

Log.info "#{distritos.count} Distritos locales creados"
Log.info "Las secciones #{inexistentes.join(',')} no se encuentran en el Marco Geográfico Nacional"