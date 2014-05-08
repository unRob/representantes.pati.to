# encoding: utf-8
class RepresentantesApp < Sinatra::Base
  register Sinatra::Namespace
  namespace '/actores' do

    ubicacion = lambda do
      coords = [params[:longitude].to_f,params[:latitude].to_f]
      seccion = Seccion.paraCoordenadas(coords)
      data = deSeccion(seccion)
      data[:coords] = coords;
      json(data)
    end

    def deSeccion(seccion)

      if seccion.is_a? String
        seccion = Seccion.find(seccion)
      end

      if !seccion
        status 404
        return {status: 'error', razon: 'No tengo una sección electoral para este punto, ¿Estás en México?'}
      end

      distritos = Distrito.deSeccion(seccion)

      if distritos.count == 0 
        status 404
        return {status: 'error', razon: 'No tengo distritos para esta sección'}
      end

      actores = Actor.deDistritos(distritos)

      return {
        representantes: actores.reverse,
        seccion: seccion
      }
    end



    post '/por-ubicacion', &ubicacion
    get '/por-ubicacion', &ubicacion

    get '/de-seccion/:seccion' do |seccion|
      data = deSeccion(seccion)
      if request.xhr?
        json(data)
      else
        view :portada, {request_data: data}
      end
    end


    get '/imagen/*' do |representante|
      #img = Actor.imagen(representante)
      

      if representante =~ %r{http}
        representante = representante.gsub(%r{http://*}, 'http://')
        actor = Actor.where({imagen: representante}).first
        vocal = 'e'
        vocal = 'a' if actor && actor.genero == 0
        return redirect to ("/img/representant#{vocal}.jpg")
      end

      grid = Mongoid::GridFs.build_namespace_for('imagenes')
      img = grid.get(representante)
      headers "Content-type" => 'image/jpeg'
      response['Expires'] = (Time.now + 60*60*24*356*3).httpdate
      img
    end


    get '/:nombre/:id' do |nombre, id|
      actor = Actor.find(id)
      if !actor
        status 404
        if request.xhr?
          return json({status: 'error', mensaje: 'No encontré al representante que buscas'})
        else
          return view :error, {mensaje: 'No encontré al representante que buscas'}
        end
      end


      if request.xhr?
        links = actor.links.select {|l| l.servicio != 'postal' }
        links.each do |link|
          clase = "social-icon"
          icono = link.servicio
          if link.servicio == 'http'
            clase = "icon round"
            icono = 'globe'
          end
        end
        postal = actor.links.where({servicio: postal}).first
        json({actor: actor})
      else
        data = {actor: actor}
        view :"actores/detalles", data
      end

    end

  end #/namespace
end #/class