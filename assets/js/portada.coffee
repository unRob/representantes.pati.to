# portada
#= require _jquery
#= require _shared
#= require _filtros
#= require _mustache
#= require _map
#= require _geolocation
#= require _geo
#= require _templates
#= require _representante
#= require _representantes
#= require _history
#= require _d3
#= require _asistencias
#= require _votaciones

$ ()->

	els =
		body: $('body')
		mapa:
			instrucciones: $('#instrucciones-mapa')
			container: $('#mapa')
			canvas: $('#mapa-canvas')
			loading: $('#mapa-loading')
		aquiVivo: $('#aqui-vivo')
		localizame:
			container: $('#localizame')
			icono: $('#localizame .icono')
		cover: $('#cover')
		representantes: $("#representantes")

	Templates.setup($('.render-template'))
	opts =
		latitude: 19.432479,
		longitude: -99.133192

	mapita = new Mapa(els.mapa.canvas, opts)
	window.mapita = mapita

	mapita.on 'map.loaded', ()->
		els.mapa.container.removeClass('loading').on 'click', (evt)->
			evt.preventDefault()
			els.mapa.instrucciones.fadeOut()

		if window.request_data
			mapita.setPolygons(window.request_data.seccion.coords.coordinates)
			centro = mapita.centroid()
			mapita.marker.setPosition(centro)
			mapita.pan(centro)

		els.mapa.container.on 'webkitAnimationEnd animationend', (evt)->
			els.mapa.loading.css('display', 'none')

	newPosition = (evt)->
		els.mapa.instrucciones.fadeOut();
		if evt.hasOwnProperty('latitude')
			coords = evt
			mapita.pan(coords)
		else
			evt.preventDefault()
			c = mapita.instance.getCenter()
			coords =
				latitude: c.lat(),
				longitude: c.lng()

		Representantes.deUbicacion coords, (representantes, seccion)->
			if (representantes is 'error')
				els.mapa.instrucciones.text(seccion.razon).fadeIn();
				setTimeout ()->
					els.mapa.instrucciones.fadeOut(500);
				, 3000
				return false
			History.pushState.apply(null, Representantes.state())

			null

	Geo.on 'ubicando', (evt)->
		els.localizame.icono.text('loading').addClass('loading');
	Geo.on 'error', (evt)->
		els.localizame.icono.text('locate').removeClass('loading');
	Geo.on 'posicion', (evt)->
		newPosition(evt);
		els.localizame.icono.text('locate').removeClass('loading');


	###
	History
	###
	quitaDetalles = (evt)->
		return false unless els.body.hasClass('covered')
		evt && evt.preventDefault();
		els.cover.addClass('inactive');
		els.body.removeClass('covered');

	portada = ()->
		quitaDetalles()
		els.representantes.html('');
		mapita.polygons.forEach (p)->
			p.setMap(null);

	History.Adapter.bind window, 'statechange', ()->
		State = History.getState()
		_gaq.push(['_trackPageview', State.url.replace(window.location.origin, '')]);

		console.log("Navigate: #{State.hash}")
		if State.hash == '/'
			portada()
		else
			State.data.evt && eval(State.data.evt)(State.data.data, els)


	if window.request_data
		Representantes.show(window.request_data, els)
		els.mapa.instrucciones.fadeOut();


	els.cover.appendTo('body')
	els.representantes.on 'click', '.representante', (evt)->
		evt.preventDefault()
		id = this.id.split('-')[1]
		actor = Representantes.find(id);
		History.pushState.apply(null, actor.state())

	els.aquiVivo.on 'click', newPosition
	els.localizame.container.on 'click', (evt)->
		evt.preventDefault();
		els.mapa.instrucciones.fadeOut();
		Geo = new Geolocation
			success:(coord)->
				newPosition(coord)
				@
			notFunction:->
				alert "No tienes GPS!"
				@
			unknown:(error)->
				alert "Se rompió, Dios sabrá cómo"
				@
			forbidden:(error)->
				alert "Ni modo, no se pudo"
				@
			timeOut:(error)->
				alert "Te tardaste, chav@"
				@
		Geo.getCurrentPosition()


	NotificationCenter.on 'filtros', (data)->
		activos = data.activos.map((a)-> ".#{a}").join(', ');
		inactivos = data.inactivos.map((i)-> ".#{i}").join(', ');
		$(activos).show();
		$(inactivos).hide();
