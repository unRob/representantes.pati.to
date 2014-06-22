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

  	get do
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

    post do
      json busca(params)
    end


  end #/namespace

end #class