require_relative "../camaras/#{$nombre_camara}/endpoints.rb"
require_relative "../camaras/#{$nombre_camara}/comisiones.rb"

camara = "Parser::#{$nombre_camara.titleize}".constantize

save = true
if ARGV[1] == 'test'
  save = false
end

parser = camara::Comision.new
Log.info "Buscando comisiones... "

comisiones = Crawler.new camara.endpoints[:lista_comisiones]
comisiones.requests = parser.requests

$count = 0

comisiones.run do |response, request|

  begin
    parser.parse(response.body, request) do |comision|
      begin
        #Comision.create!(comision) if save
        Log.debug(comision[:nombre]) unless save
      rescue Exception => e
        puts comision[:nombre]
        puts comision[:meta][:fkey]
        puts e
        exit
      end
      $count += 1
    end
  rescue Exception => e
    Log.error request[:url]
    Log.error e.message
    Log.error e.backtrace
    exit
  end

end
Log.info "#{$count} comisiones ingestadas"