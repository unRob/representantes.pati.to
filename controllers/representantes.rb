# encoding: utf-8
class RepresentantesApp < Sinatra::Base
  register Sinatra::Namespace
  namespace '/actores' do

    ubicacion = lambda do
      coords = [params[:longitude].to_f,params[:latitude].to_f]
      seccion = Seccion.paraCoordenadas(coords)

      if !seccion
        status 404
        return json({status: 'error', razon: 'No tengo una sección electoral para este punto, ¿Estás en México?'})
      end

      distritos = Distrito.deSeccion(seccion)

      if distritos.count == 0 
        status 404
        return json({status: 'error', razon: 'No tengo distritos para esta sección'})
      end

      actores = Actor.deDistritos(distritos)
      puts actores.count

      json({
        representantes: actores.reverse,
        coords: coords,
        seccion: seccion
      })

    end

    post '/por-ubicacion', &ubicacion
    get '/por-ubicacion', &ubicacion

    get '/imagen/:representante' do |representante|
      #img = Actor.imagen(representante)
      grid = Mongoid::GridFs.build_namespace_for('imagenes')
      img = grid.get(representante)
      headers "Content-type" => 'image/jpeg'
      response['Expires'] = (Time.now + 60*60*24*356*3).httpdate
      img
    end

  end #/namespace
end #/class