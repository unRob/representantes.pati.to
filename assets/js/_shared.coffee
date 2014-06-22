((w)->

	evt_callbacks = {}
	_on = (evt, callback)->
		evt_callbacks[evt] ||= [];
		evt_callbacks[evt].push callback

	emit = (evt, data)->
		cbs = evt_callbacks[evt]
		if !cbs
			console.error "No puedo notificar a <#{evt}>, porque no tengo callbacks"
			return

		for callback in cbs
			try
				callback(data)
			catch e
				console.error("Error de callback");
				console.log(e.message)
				console.error(e.stack)
				console.log(e)

	_off = (evt)->
		evt_callbacks[evt] = []

	w.NotificationCenter =
		on: _on,
		off: _off,
		emit: emit

)(window)

$ ()->
	resizeTO = null

	$(window).on 'resize', ()->
		clearTimeout resizeTO
		resizeTO = setTimeout ()->
			NotificationCenter.emit 'resize'
		, 250