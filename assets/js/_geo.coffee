# Geo

Geo =
	geolocation: false,
	watcher: null
	defaultOptions:
		enableHighAccuracy: true,
		timeout: 10000, #diez segundos
		maximumAge: 60000 #un minuto
	callbacks: {}

Geo.setup = ()->
	Geo.geolocation = navigator.hasOwnProperty 'geolocation'
	
	if (Geo.geolocation)
		Geo.trigger 'ubicando'
		#setTimeout(()->
		navigator.geolocation.getCurrentPosition Geo.aquired, Geo.error, Geo.defaultOptions
		#, 10000)

Geo.on = (evt, callback)->
	Geo.callbacks[evt] = Geo.callbacks[evt] || []
	Geo.callbacks[evt].push callback
	true

Geo.trigger = (evt, data={})->
	cbs = Geo.callbacks[evt]
	return false unless cbs
	for cb in cbs
		cb(data)
	true

Geo.error = (data)->
	console.error data
	Geo.trigger 'error'

Geo.aquired = (pos)->
	# pos.coords porque safari > 7.6 ya lo abstrae al prototipo :/
	ngl = pos.hasOwnProperty('coords') || pos.coords
	lat = ngl && pos.coords.latitude || pos.lat()
	long= ngl && pos.coords.longitude || pos.lng()
	
	coords =
		latitude: lat
		longitude: long
	Geo.trigger 'posicion', coords