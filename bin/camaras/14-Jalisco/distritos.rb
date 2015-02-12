#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../../common.rb'
require_relative './endpoints';

Log.info "Buscando distritos"

query = {
  distrito: '0',
  year: '2015'
}
res = Requester.post(Parser::Jalisco.endpoints[:distritos], body: query)
count = 0;

data = JSON.parse(res.body)

Distrito.where({tipo: 'local', entidad: Parser::Jalisco.id_entidad}).delete

distritos = {}
data.each do |seccion, info|
  # 0316, ["0316|2015\/mapas-seccionales\/distrito-18\/cihuatlan\/psi14180316.pdf"]
  dto = info.first.scan(/distrito-(\d+)/).flatten.first.to_i

  distritos[dto] ||= []
  distritos[dto] << "#{Parser::Jalisco.id_entidad}-#{seccion.to_i}"
end


distritos.each do |id, secciones|

  distrito = {
    _id: "dl-#{Parser::Jalisco.id_entidad}-#{id}",
    tipo: 'local',
    entidad: Parser::Jalisco.id_entidad,
    secciones: secciones
  }

  Log.debug "Distrito #{distrito[:_id]} tiene #{distrito[:secciones].count} secciones"
  begin
    Distrito.create!(distrito)
    count += 1
  rescue
    Log.error "No pude crear el dto #{distrito[:_id]}"
    puts rows.to_html
    exit
  end
end

Log.info "#{count} Distritos locales creados"