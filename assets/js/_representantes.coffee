Representantes = {}

Representantes.seccion = null;
Representantes.loaded_extra = false
Representantes.query = (url, data)->
	req = $.ajax {
		url: "/actores/#{url}",
		data: data,
		type: 'post'
	}

	req

Representantes.actores = {}
Representantes.find = (id)-> Representantes.actores[id];

Representantes.state = ()->
	seccion = Representantes.seccion;
	title = "Representantes de la Sección #{seccion._id}"
	reps = Representantes.actores
	actores = []
	for id, rep of reps
		actores.push(rep.orig)
	data =
		evt: 'Representantes.show',
		data: {
			seccion: seccion,
			representantes: actores
		}
	[data, title, "/actores/de-seccion/#{seccion._id}"]

Representantes.deUbicacion = (coords, callback)->

	query = Representantes.query 'por-ubicacion', coords, callback
	query.done (data)->
		Representantes.seccion = data.seccion
		Representantes.parse data.representantes
		callback(Representantes.actores, data.seccion)

	query.fail (xhr, reason, error)->
		callback('error', xhr.responseJSON)


Representantes.show = (data,els)->
	els.cover.addClass('inactive')
	$('body').removeClass('covered')
	html = ''
	Representantes.parse(data.representantes)
	mapita.setPolygons(data.seccion.coords.coordinates)
	html += actor.toString() for id, actor of Representantes.actores
	els.representantes.html(html)
	Representantes.filtros()

Representantes.filtros = ()->
	filtros = window.filtros()
	activos = filtros.activos.map((a)-> ".#{a}").join(', ');
	inactivos = filtros.inactivos.map((i)-> ".#{i}").join(', ');
	$(activos).show();
	$(inactivos).hide();


Representantes.parse = (reps)->
	Representantes.actores = {}
	for rep in reps
		r = new Representante(rep)
		Representantes.actores[rep.id] = r
	Representantes.actores