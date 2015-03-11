require_relative "../camaras/#{$camara}/endpoints.rb"
require_relative "../camaras/#{$camara}/comisiones.rb"

camara = "Parser::#{$camara.to_constant}".constantize

save = true

if ARGV[1] == 'test'
  save = false
  TEST=true
  Log.debug "Modo de pruebas"
else
  TEST=false
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
        Comision.create!(comision) if save
        Log.debug("#{comision[:nombre]} - #{comision[:meta][:fkey]}") unless save
      rescue Exception => e
        puts comision[:nombre]
        puts comision[:meta][:fkey]
        puts e
        exit
      end
      $count += 1
    end
  rescue Exception => e
    Log.error e.backtrace.reverse.join("\n")
    Log.error e.message
    Log.error request[:url]
    exit
  end

end
Log.info "#{$count} comisiones ingestadas"