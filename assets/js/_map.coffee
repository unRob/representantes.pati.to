Mapa = (container, options)->
	@canvas = container.get(0)
	@latLng = new google.maps.LatLng(options.latitude, options.longitude)
	@instance = @iniciaMapa()
	@marker = @agregaMarcador(@latLng)
	@callbacks = []
	@polygons = []

	self = this
	google.maps.event.addListenerOnce @instance, 'tilesloaded', ()=>
		self.trigger('map.loaded')

	google.maps.event.addDomListener window, "resize", ()->
		c = self.instance.getCenter()
		google.maps.event.trigger(self.instance, "resize")
		self.instance.setCenter(c)
	
	google.maps.event.addListener @instance, 'zoom', ()->
		c = self.instance.getCenter()
		google.maps.event.trigger(self.instance, "resize")
		self.instance.setCenter(c)

	google.maps.event.addListener @instance, 'center_changed', ()->
		self.marker.setPosition self.instance.getCenter()

	this

Mapa::on = (evt, callback)->
	@callbacks[evt] = @callbacks[evt] || []
	@callbacks[evt].push callback
	true

Mapa::trigger = (evt, data={})->
	cbs = @callbacks[evt]
	return false unless cbs
	for cb in cbs
		cb(data)
	true

Mapa::iniciaMapa = ()->
	styledMapOptions = { name: 'Simple'}
	mapType = new google.maps.StyledMapType(Mapa.estilo, styledMapOptions)
	mapOptions =
		center: @latLng,
		zoom: 15,
		panControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		mapTypeId: 'Simple'

	map = new google.maps.Map(@canvas, mapOptions)
	map.mapTypes.set('Simple', mapType);
	map

Mapa::agregaMarcador = (latLng)->
	#console.log("agregando marcador @ #{latLng.lat()}, #{latLng.lng()}")
	new google.maps.Marker({
		position: latLng,
		map: @instance,
		animation: google.maps.Animation.DROP,
		title:"Yo mero"
	})

Mapa::pan = (coords)->
	if !coords.hasOwnProperty('latitude')
		coords =
			latitude: coords.lat(),
			longitude: coords.lng()
	@instance.panTo(new google.maps.LatLng(coords.latitude,coords.longitude));
	@instance.setZoom(16);

Mapa::setPolygons = (polygons)->
	for overlay in @polygons
		overlay.setMap(null)

	@polygons = []

	for polygon in polygons
		opts =
			strokeColor: "transparent",
			strokeOpacity: 0.0,
			fillColor: "#ED1E79",
			fillOpacity: 0.5,

		opts.paths = $.map(polygon, (coord)-> new google.maps.LatLng(coord[1], coord[0]))
		o = new google.maps.Polygon(opts)
		o.setMap(@instance)
		@polygons.push o

	true


Mapa::centroid = ()->
	bounds = new google.maps.LatLngBounds()
	
	for path in @polygons[0].getPath().getArray()
		bounds.extend(path)

	return bounds.getCenter();

Mapa::overlay = null
Mapa.estilo = [
	{
		"featureType": "poi",
		"stylers": [
			{ "visibility": "off" }
		]
	},{
		"featureType": "landscape.man_made",
		"stylers": [
			{ "visibility": "simplified" }
		]
	},{
		"featureType": "landscape.natural",
		"stylers": [
			{ "color": "#ffffff" }
		]
	},{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{ "visibility": "simplified" },
			{ "hue": "#ff0055" },
			{ "lightness": 4 }
		]
	},{
		"featureType": "road.highway",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "simplified" },
			{ "lightness": 56 }
		]
	},{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "color": "#ffffff" },
			{ "weight": 0.1 }
		]
	},{
	},{
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [
			{ "lightness": -9 }
		]
	},{
		"featureType": "landscape.man_made",
		"elementType": "geometry.fill",
		"stylers": [
			{ "hue": "#ffa200" },
			{ "lightness": 3 },
			{ "gamma": 1.53 }
		]
	},{
	},{
		"featureType": "road.highway",
		"elementType": "labels.text.stroke",
		"stylers": [
			{ "weight": 5.4 },
			{ "color": "#ff94c3" }
		]
	}
];

overlay = null;
canvas = $('#mapa-canvas').get(0);