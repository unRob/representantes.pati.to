# Representante

porcentaje = (de, a)->
	return 0 if a is 0
	100-Math.round(de/a*100)

clase = (pc)->
	return 'safe' if (pc > 75)
	return 'cagandola' if (pc > 50)
	return 'zurrandola' if (pc > 30)
	return 'diarrea'


Representante = (data)->
	@data = data
	@orig = $.extend({}, data)
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
	
	if (@data.inasistencias && !@data.inasistencias.pc)
		pc = porcentaje(@data.inasistencias.total, @data.inasistencias.sesiones)
		@data.inasistencias.pc =
			valor: pc
			clase: clase(pc)
		periodosAsistencias = []

		for k,v of @data.inasistencias.periodos
			periodosAsistencias.push {fecha: k, valor: v}
		@data.inasistencias.periodos = periodosAsistencias
			
	if (@data.votaciones && !@data.votaciones.pc)
		pc = porcentaje(@data.votaciones.ausente, @data.votaciones.total)
		@data.votaciones.pc =
			valor: pc
			clase: clase(pc)

		periodosVotaciones = []
		for k,v of @data.votaciones.periodos
			periodosVotaciones.push {fecha: k, valor: porcentaje(v.ausente, v.total)}
		@data.votaciones.periodos = periodosVotaciones

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