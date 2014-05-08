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

$ ()->

	Templates.setup($('.render-template'))
	#Geo.setup()
	opts = 
		latitude: 19.432479,
		longitude: -99.133192
	mapita = new Mapa($('#mapa-canvas'), opts)
	window.mapita = mapita

	mapita.on 'map.loaded', ()->
		$('#mapa').removeClass('loading')
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
		evt && evt.preventDefault();
		$('#cover').addClass('inactive');
		$('body').removeClass('covered');

	MuestraUnRepresentante = (actor)->
		console.log('Mostrando un representante')
		$('body').addClass('covered');
		$('#cover').html(actor.detalles()).removeClass('inactive').click quitaDetalles
		$('.info-close').click quitaDetalles
		$('#cover .hoja').click (evt)->
			evt.stopPropagation();

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
		actor = Representantes.find(data.data.id)
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
		Representantes.parse(request_data.representantes);
		MuestraRepresentantes(Representantes.actores)
	
	newPosition = (evt)->
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
		evt.preventDefault();
		Geo.setup();


	$('#cover').appendTo('body');
	$('#representantes').on 'click', '.representante', (evt)->
		evt.preventDefault();
		id = this.id.split('-')[1];
		actor = Representantes.find(id);
		MuestraUnRepresentante(actor);
		History.pushState.apply(null, actor.state())


	NotificationCenter.on 'filtros', (data)->
		activos = data.activos.map((a)-> ".#{a}").join(', ');
		inactivos = data.inactivos.map((i)-> ".#{i}").join(', ');
		$(activos).show();
		$(inactivos).hide();
