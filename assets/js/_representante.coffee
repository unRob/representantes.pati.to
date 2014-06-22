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

Representante.show = (rep, els)->
	els.body.addClass('covered')

	rep = new Representante(rep)
	back = (evt)->
		console.log('back')
		evt.preventDefault()
		History.back()
		NotificationCenter.off 'resize'

	els.cover.html(rep.detalles()).removeClass('inactive').one 'click', back
	$('.info-close').one 'click', back

	gA = rep.graficas.Asistencias.call(rep)
	gV = rep.graficas.Votaciones.call(rep)

	if gA || gV
		NotificationCenter.on 'resize', ()->
			gA.resize()
			gV.resize()

	$('#cover .hoja').click (evt)-> evt.stopPropagation()


Representante::graficas = {}
Representante::graficas.Asistencias = ()->
	return unless @data.inasistencias
	$('#data-asistencias').replaceWith('<div id="grafica-asistencias" class="grafica">')
	grafica = new Asistencias('#grafica-asistencias', @data.inasistencias.periodos)
	grafica.draw()
	grafica

Representante::graficas.Votaciones = ()->
	return unless @data.votaciones
	$('#data-votaciones').replaceWith('<div id="grafica-votaciones" class="grafica">')
	grafica = new Votaciones('#grafica-votaciones', @data.votaciones.periodos)
	grafica.draw()
	grafica


Representante::state = ()->
	url = "/actores/#{@data.stub}/#{@data.id}"
	title = "Detalles de #{@data.nombre}"
	data = {
		evt: 'Representante.show',
		data: @orig
	}
	[data, title, url];

Representante::toString = ()->
	Templates['representante'](@data)

Representante::detalles = ()->	
	Templates.detalles(@data)