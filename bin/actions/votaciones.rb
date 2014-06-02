require_relative "../camaras/#{$camara}/endpoints.rb"
require_relative "../camaras/#{$camara}/lista.rb"
require_relative "../camaras/#{$camara}/votaciones.rb"

camara = "Parser::#{$camara.to_constant}".constantize


if ARGV[1] == 'test'
  Log.info "Corriendo pruebas"
  if camara::Votaciones.respond_to?(:test)
    camara::Votaciones.test(); 
    exit
  else
    puts 'camara test :('
    exit
    TEST = true
  end
else
  TEST = false
end


Log.info "Buscando actores... "

delegate = camara::Votaciones.new
lista = delegate.lista

Log.info "#{lista.count} Actores encontrados"

Log.info "Buscando votaciones..."

actores = Crawler.new camara.endpoints[:votaciones]
actores.requests = lista.to_a

count = 0
actores.run do |response, request|

  begin
    data = delegate.parse(response.body, request)

  rescue Exception => e
    Log.error request[:url]
    Log.error e.message
    Log.error e.backtrace
    exit
  end

  begin

    actor = request[:actor]
    unless TEST
      actor.votaciones = data
      actor.save
    else
      Log.info "#{actor.nombre} (#{actor.partido}) - #{data[:ausente]}"
    end

  rescue Exception => e
    puts request
    puts e
    exit
  end

  count += 1
end
Log.info "#{count} actores procesados"