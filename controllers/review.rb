class RepresentantesApp < Sinatra::Base
  register Sinatra::Namespace

  namespace '/review' do 

    def split_nombre nombre_completo
      nombre = ""
      apellido = ""
      componentes = nombre_completo.split(' ')
      case componentes.count
        when 2
          nombre, apellido = componentes
        when 3
          nombre, apellido = [componentes[0], componentes[1,2].join(' ')]
        when 4
          nombre, apellido = [componentes.slice(0,2).join(' '), componentes.slice(2,2).join(' ')]
        else
          len = componentes.count
          start = (len/2).floor
          nombre = componentes.slice(0,start).join(' ')
          apellido = componentes.slice(start, len).join(' ')
      end
      return [nombre, apellido]
    end

    get '/login' do
      session[:colaborador] = true;
      redirect to '/review/generales'
    end


    get '/generales' do
      a = Actor.or({:apellido.exists => false}, {:genero.exists => false}).first

      nombre, apellido = split_nombre(a.nombre)
      genero = a.genero

      view "review/general", {actor: a, nombre: nombre, apellido: apellido, genero: genero}

    end

    get '/generales/:id' do |id|
      a = Actor.find(id)

      nombre, apellido = split_nombre(a.nombre)
      nombre = nombre
      apellido = a.apellido || apellido
      genero = a.genero

      view "review/general", {actor: a, nombre: nombre, apellido: apellido, genero: genero}
    end

    post '/actor/:id' do |id|

      actor = Actor.find(id)
      data = clean_params(params)
      data.delete 'id'

      data[:links] = data[:links].values if data[:links]
      data[:genero] = data[:genero].to_i if data[:genero]

      if session[:colaborador]
        actor.update_attributes(data)
      else
        actor.revisiones.create!({changeSet: data})
      end
      #actor.save!
      redirect to '/review/generales'
    end


  end #/ namespace

end #/ class