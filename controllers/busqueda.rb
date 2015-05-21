# encoding: utf-8
class RepresentantesApp < Sinatra::Base
  register Sinatra::Namespace
  namespace '/busqueda' do


    def busca params
      where = {}
      transliterado = TextSearch::to_regex(params[:nombre].strip)
      where[:camara] = params[:camara] if params[:camara]
      where[:partido] = params[:partido] if params[:partido]


      if params[:set] == 'actores'
        where['$or'] = [{nombre: transliterado}, {apellido: transliterado}]
        set = Actor
      elsif params[:set] == 'comisiones'
        set = Comision
        where[:nombre] = transliterado
      end

      result = set.where(where)
      total = result.count()
      if params[:p]
        result.skip(params[:p]*10)
      end

      {
        resultados: result.limit(10).as_json,
        total: total,
        pagina: params[:pag] || 1,
        controller: params[:set]
      }
    end

  	get '/' do
      data = {}
      if params[:nombre]
        data = busca(params)
      end

      if request.xhr?
        json data
      else
        view :busqueda, data
      end
  	end

    post '/' do
      json busca(params)
    end


    before do
      if request.request_method == 'OPTIONS'
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "GET"

        halt 200
      end
    end


    get '/de-seccion/:lat/:lng' do |lat, lng|
      seccion = Seccion.paraCoordenadas(coords)

      if !seccion
        status 404
        return json({status: "error", razon: 'No tengo una sección electoral para este punto, ¿Estás en México?'})
      end

    end


    get '/geo/:camara/:lat/:lng' do |camara, lat, lng|
      headers 'Access-Control-Allow-Origin' => '*'
      coords = [lng, lat].map(&:to_f)

      seccion = Seccion.paraCoordenadas(coords)
      if !seccion
        status 404
        return json({status: "error", razon: 'No tengo una sección electoral para este punto, ¿Estás en México?'})
      end

      tipo = {senado: 'sf-\d+', diputados: 'df-\d+', local: 'dl-\d+' }[camara] || 'df-\d+-\d+'
      dto = Distrito.where({secciones: seccion.id, _id: /#{tipo}/}).only(:id).first

      if !dto
        status 404
        return json({status: "error", razon: "No tengo distritos para esta sección"})
      end

      json({distrito: dto._id, seccion: {id: seccion._id, coords: seccion.coords}})
    end


    get '/de-distrito/:camara/:lat/:lng' do |camara, lat, lng|
      headers 'Access-Control-Allow-Origin' => '*'
      coords = [lng, lat].map(&:to_f)


      seccion = Seccion.paraCoordenadas(coords)
      if !seccion
        status 404
        return json({status: "error", razon: 'No tengo una sección electoral para este punto, ¿Estás en México?'})
      end

      tipo = {senado: 'sf-\d+', diputados: 'df-\d+', local: 'dl-\d+' }[camara] || 'df-\d+-\d+'
      dto = Distrito.where({secciones: seccion.id, _id: /#{tipo}/}).only(:id).first

      if !dto
        status 404
        return json({status: "error", razon: "No tengo distritos para esta sección"})
      end

      json(dto)
    end


    get '/de-distrito/:id' do |id|
      headers 'Access-Control-Allow-Origin' => '*'
      dto = Distrito.where({_id: id,}).first

      if !dto
        status 404
        return json({status: "error", razon: "No tengo este distrito"})
      end

      json(dto)
    end

  end #/namespace

end #class