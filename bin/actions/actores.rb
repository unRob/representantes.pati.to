require_relative "../camaras/#{$nombre_camara}/endpoints.rb"
require_relative "../camaras/#{$nombre_camara}/lista.rb"
require_relative "../camaras/#{$nombre_camara}/actor.rb"

camara = "Parser::#{$nombre_camara.titleize}".constantize

if ARGV[1] == 'test'
  camara.test(); 
  exit;
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
    actor = Actor.create!(data)
    actor.puestos.each do |puesto|
      puesto.comision.integrantes << actor
      puesto.comision.save!
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