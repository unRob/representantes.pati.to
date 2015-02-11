require_relative "../camaras/#{$camara}/endpoints.rb"
require_relative "../camaras/#{$camara}/lista.rb"
require_relative "../camaras/#{$camara}/actor.rb"

camara = "Parser::#{$camara.to_constant}".constantize


if ARGV[1] == 'test'
  Log.info "Corriendo pruebas"
  if camara.respond_to?(:test)
    camara.test();
    exit
  else
    TEST = true
  end
else
  TEST = false
end

Log.info "Buscando actores... "
lista = camara::Lista.new
Log.info "#{lista.count} Actores encontrados"


Log.info "Ingestando actores..."

actores = Crawler.new camara.endpoints[:actor]
actores.requests = lista.to_a

def ingesta data
  begin
    unless TEST
      actor = Actor.create!(data)
      actor.puestos.each do |puesto|
        puesto.comision.integrantes << actor
        puesto.comision.save!
      end
    else
      actor = Actor.new data
      Log.info "#{actor.nombre} (#{actor.partido}) - #{actor.distrito}"
    end

  rescue Exception => e
    puts data[:nombre]
    puts data[:meta][:fkey]
    puts e
    exit
  end
end

count = 0
parser = camara::Actor.new
actores.run do |response, request|

  begin
    if parser.respond_to? :single_page
      parser.parse(response.body, request) do |data|
        ingesta(data)
        count += 1
      end
    else
      ingesta parser.parse(response.body, request)
      count += 1
    end

  rescue Exception => e
    Log.error request[:url]
    e.backtrace.reverse.each do |line|
      Log.error line
    end
    Log.error e.message
    exit
  end

end
Log.info "#{count} actores ingestados"