# portada
#= require _jquery
#= require _shared
#= require _filtros
#= require _mustache
#= require _map
#= require _geo
#= require _templates
#= require _representante
#= require _representantes
#= require _history
#= require _d3
#= require _asistencias
#= require _votaciones

$ ()->

	Templates.setup($('.render-template'))
	#Geo.setup()
	opts = 
		latitude: 19.432479,
		longitude: -99.133192
	mapita = new Mapa($('#mapa-canvas'), opts)
	window.mapita = mapita

	mapita.on 'map.loaded', ()->
		$('#mapa').removeClass('loading').on 'click', (evt)->
			evt.preventDefault();
			$('#instrucciones-mapa').fadeOut();
		if window.request_data
			mapita.setPolygons(window.request_data.seccion.coords.coordinates)
			centro = mapita.centroid()
			mapita.marker.setPosition(centro)
			mapita.pan(centro)

		$('#mapa').on "webkitAnimationEnd animationend", (evt)->
			$('#mapa-loading').css('display', 'none')


	navigation = {}
	navigation.main = ()->
		quitaDetalles()
		$('#representantes').html('');
		mapita.polygons.forEach (p)->
			p.setMap(null);


	quitaDetalles = (evt)->
		return false unless $('body').hasClass('covered')
		#History.back();
		evt && evt.preventDefault();
		$('#cover').addClass('inactive');
		$('body').removeClass('covered');

	MuestraUnRepresentante = (actor)->
		return if mostrandoRep
		console.log('Mostrando un representante')
		$('body').addClass('covered');
		$('#cover').html(actor.detalles()).removeClass('inactive').click quitaDetalles
		$('.info-close').click quitaDetalles
		
		$('#data-asistencias').replaceWith('<div id="grafica-asistencias" class="grafica">')
		grafica_asistencias = new Asistencias('#grafica-asistencias', actor.data.inasistencias.periodos);
		grafica_asistencias.draw();
		
		console.log actor.data.inasistencias.periodos[0], actor.data.votaciones.periodos[0]

		$('#data-votaciones').replaceWith('<div id="grafica-votaciones" class="grafica">')
		grafica_votaciones = new Votaciones('#grafica-votaciones', actor.data.votaciones.periodos);
		grafica_votaciones.draw();
		
		NotificationCenter.on 'resize', ()->
			grafica_asistencias.resize();
			grafica_votaciones.resize();

		$('#cover .hoja').click (evt)->
			evt.stopPropagation();

		mostrandoRep = false

	MuestraRepresentantes = (reps)->
		html = ''
		html += actor for id, actor of reps
		$('#representantes').html(html)
		filtros = window.filtros()
		activos = filtros.activos.map((a)-> ".#{a}").join(', ');
		inactivos = filtros.inactivos.map((i)-> ".#{i}").join(', ');
		$(activos).show();
		$(inactivos).hide();

	MuestraSeccion = (seccion)->
		mapita.setPolygons(seccion.coords.coordinates)

	navigation['representantes-lista'] = (data)->
		quitaDetalles()
		actores = Representantes.parse(data.representantes)
		console.log(actores);
		MuestraRepresentantes(actores);
		MuestraSeccion(data.seccion);

	navigation['representantes-show'] = (data)->
		return if mostrandoRep
		actor = Representantes.find(data.data.id)
		console.log 'nav show'
		MuestraUnRepresentante(actor)



	History.Adapter.bind window,'statechange', ()->
        State = History.getState()
        console.log('state change', State);
        _gaq.push(['_trackPageview', State.url.replace(window.location.origin, '')]);

        if State.hash == '/'
        	navigation.main()
        else
	        navigation[State.data.evt] && navigation[State.data.evt](State.data.data)


	NotificationCenter.on 'history.change', (data)->
		url = data.url
		#state = data.state
		
		#if state isnt false
		#	# navigation
		#	if 'evt' in state
		#		evt = state.evt 
		#	else
		#		evt = 'main'
		#	data = state && state.data || null;
		#	console.log("Navigation callback a #{evt}", data)
		#	navigation[evt](data)

	
	if window.request_data
		$('#instrucciones-mapa').fadeOut();
		Representantes.parse(request_data.representantes);
		MuestraRepresentantes(Representantes.actores)
	
	newPosition = (evt)->
		$('#instrucciones-mapa').fadeOut();
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
			console.log(representantes)
			if (representantes is 'error')
				$('#instrucciones-mapa').text(seccion.razon).fadeIn();
				setTimeout ()->
					$('#instrucciones-mapa').fadeOut(500);
				, 3000
				return false
			console.log('actores encontrados')
			MuestraSeccion(seccion)
			MuestraRepresentantes(representantes)
			History.pushState.apply(null, Representantes.state())

			null

	Geo.on 'ubicando', (evt)->
		$('#localizame .icono').text('loading').addClass('loading');
	Geo.on 'posicion', (evt)->
		newPosition(evt);
		$('#localizame .icono').text('locate').removeClass('loading');

	$('#aqui-vivo').on 'click', newPosition
	$('#localizame').on 'click', (evt)->
		$('#instrucciones-mapa').fadeOut();
		evt.preventDefault();
		Geo.setup();


	$('#cover').appendTo('body');
	mostrandoRep = false
	$('#representantes').on 'click', '.representante', (evt)->
		evt.preventDefault();
		id = this.id.split('-')[1];
		actor = Representantes.find(id);
		MuestraUnRepresentante(actor);
		mostrandoRep = true
		History.pushState.apply(null, actor.state())


	NotificationCenter.on 'filtros', (data)->
		activos = data.activos.map((a)-> ".#{a}").join(', ');
		inactivos = data.inactivos.map((i)-> ".#{i}").join(', ');
		$(activos).show();
		$(inactivos).hide();
