# Representante

Representante = (data)->
	@data = data
	this

Representante::toString = ()->
	Templates['representante'](@data)

Representante::detalles = ()->
	