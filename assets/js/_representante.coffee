# Representante

Representante = (data)->
	@data = data
	@orig = data
	links = []
	postal = null
	for link in @data.links
		if link.servicio is 'postal'
			postal = link 
		else
			link.clase = 'social-icon'
			link.icono = link.servicio
			if link.servicio is 'http'
				link.clase = "icon round"
				link.icono = "globe"
			links.push link

	@data.links = links;

	this

Representante::state = ()->
	url = "/actores/#{@data.stub}/#{@data.id}"
	title = "Detalles de #{@data.nombre}"
	data = {
		evt: 'representantes-show',
		data: this
	}
	[data, title, url];

Representante::toString = ()->
	Templates['representante'](@data)

Representante::detalles = ()->	
	Templates.detalles(@data)