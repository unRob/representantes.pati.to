require_relative "../camaras/#{$camara}/endpoints.rb"
require_relative "../camaras/#{$camara}/lista.rb"
require_relative "../camaras/#{$camara}/asistencias.rb"

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

delegate = camara::Asistencias.new
lista = delegate.lista

Log.info "#{lista.count} Actores encontrados"

Log.info "Buscando asistencias..."

actores = Crawler.new camara.endpoints[:asistencias]
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
      actor.inasistencias = data
      actor.save
    else
      Log.info "#{actor.nombre} (#{actor.partido}) - #{data[:total]}"
    end

  rescue Exception => e
    puts request
    puts e
    exit
  end

  count += 1
end
Log.info "#{count} actores procesados"