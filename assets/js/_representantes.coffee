Representantes = {}

Representantes.query = (url, data)->
	req = $.ajax {
		url: "/actores/#{url}",
		data: data,
		type: 'post'
	}
	req

Representantes.deUbicacion = (coords, callback)->
	query = Representantes.query 'por-ubicacion', coords, callback
	query.done (data)->
		representantes = Representantes.parse data.representantes
		callback(representantes, data.seccion)



Representantes.parse = (reps)->
	ret = []
	for rep in reps
		r = new Representante(rep)
		Representantes[rep.id] = r
		ret.push r

	ret
