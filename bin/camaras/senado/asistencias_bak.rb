#!/usr/bin/env ruby
# encoding: utf-8

require '../../common.rb'
require_relative 'endpoints.rb'

START = Time.now

ids = [{id: 622}]

lista = Crawler.new Parser::Senado.endpoints[:asistencias]
lista.requests = ids

puts "Buscando asistencias... "

lista.run do |response, request|
  doc = Nokogiri::HTML(response.body)

  faltas = {
    total: 0
  }
  doc.css('#contenido_informacion tbody').each do |row|
    fecha = Date.parse row.css('a').attr('href').text.scan(/f=(.+)/).flatten[0]
    falta = row.css('td:last-child').text =~ /ausente/i
    
    faltas[fecha.year] = faltas[fecha.year] || {total: 0, "#{fecha.month}" => 0}
    faltas[fecha.year][fecha.month] ||= 0

    if falta
      faltas[:total] += 1
      faltas[fecha.year][:total] += 1
      faltas[fecha.year][fecha.month] += 1
    end

  end
  puts faltas
end

elapsed = Time.now-START
puts "Tardamos: #{elapsed.to_i}s"