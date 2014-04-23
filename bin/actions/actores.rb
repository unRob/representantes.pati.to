require_relative "../camaras/#{$camara}/endpoints.rb"
require_relative "../camaras/#{$camara}/lista.rb"
require_relative "../camaras/#{$camara}/actor.rb"

camara = "Parser::#{$camara.to_constant}".constantize

TEST = false
if ARGV[1] == 'test'
  Log.info "Corriendo pruebas"
  if camara.respond_to?(:test)
    camara.test(); 
    exit
  else
    TEST = true
  end
end

Log.info "Buscando actores... "
lista = camara::Lista.new
Log.info "#{lista.count} Actores encontrados"


Log.info "Ingestando actores..."

actores = Crawler.new camara.endpoints[:actor]
actores.requests = lista.to_a

count = 0
parser = camara::Actor.new
actores.run do |response, request|

  begin
    data = parser.parse(response.body, request)

  rescue Exception => e
    Log.error request[:url]
    Log.error e.message
    Log.error e.backtrace
    exit
  end

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

  count += 1
end
Log.info "#{count} actores ingestados"