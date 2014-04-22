# portada
#= require _jquery
#= require _mustache
#= require _map
#= require _geo
#= require _templates
#= require _representante
#= require _representantes

$ ()->

	Templates.setup($('.render-template'))
	Geo.setup()
	opts = 
		latitude: 19.413173
		longitude: -99.156075
	mapita = new Mapa($('#mapa-canvas'), opts)
	window.mapita = mapita

	mapita.on 'map.loaded', ()->
		$('#mapa').removeClass('loading')
		$('#mapa').on "webkitAnimationEnd animationend", (evt)->
			$('#mapa-loading').css('display', 'none')

	
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
			mapita.setPolygons(seccion.coords.coordinates)
			html = ''
			html += representante.toString() for representante in representantes
			$('#representantes').html(html)
			null

	Geo.on 'posicion', newPosition
	$('#aqui-vivo').on 'click', newPosition

	$('#representantes').on 'click', '.representante', (evt)->
		evt.preventDefault();
		if $(this).hasClass('representante-detallado') 
			$('.representante-detallado').removeClass('representante-detallado');
			return false;
		$('.representante-detallado').removeClass 'representante-detallado'
		$(this).addClass 'representante-detallado'