#!/usr/bin/env ruby
# encoding: utf-8

require_relative '../../common.rb'
require_relative './endpoints';

listaDtos = (1..45).to_a.map {|int| {id: int.to_s.rjust(2, '0')} }
# listaDtos = [{id: '14'}]

Log.info "Buscando #{listaDtos.count} distritos"

requester = Crawler.new Parser::Edomex.endpoints[:distritos]
requester.requests = listaDtos
id_entidad = Parser::Edomex.id_entidad

Distrito.where({tipo: 'local', entidad: '15'}).delete

count = 0
requester.run do |response, request|
  puts request[:id]

  dom = Nokogiri::HTML(response.body)

  distrito = {
    _id: '',
    tipo: 'local',
    entidad: id_entidad,
    secciones: []
  }
  rows = dom.css('table[border="1"] tr')
  rows.each_with_index do |row, index|
    next if index == rows.count-1 || index == 0

    cols = row.css('td').to_a
    starts, ends = cols[cols.length-3,2]
    if index == 1
      distrito[:_id] = "dl-#{id_entidad}-#{request[:id].to_i}"
    end

    distrito[:secciones] += (starts.text.to_i..ends.text.to_i).map {|s| "#{id_entidad}-#{s}"}
  end

  Log.debug "Distrito #{distrito[:_id]} tiene #{distrito[:secciones].count} secciones"
  begin
    Distrito.create!(distrito)
    count += 1
  rescue
    Log.error "No pude hacer jalar #{request[:url]}"
    puts rows.to_html
    exit
  end

end

Log.info "#{count} Distritos locales creados"