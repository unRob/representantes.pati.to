# Representante

porcentaje = (de, a)->
	return 0 if a is 0
	Math.round(de/a*100)

clase = (pc)->
	return 'safe' if (pc < 15)
	return 'cagandola' if (pc < 30)
	return 'zurrandola' if (pc < 70)
	return 'diarrea'


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

	@data.desempeno = (@data.inasistencias || @data.votaciones)
	if (@data.inasistencias)
		pc = porcentaje(@data.inasistencias.total, @data.inasistencias.sesiones)
		@data.inasistencias.pc =
			valor: pc
			clase: clase(pc)
	if (@data.votaciones)
		pc = porcentaje(@data.votaciones.ausente, @data.votaciones.total)
		@data.votaciones.pc =
			valor: pc
			clase: clase(pc)

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