((w)->

	evt_callbacks = {}
	_on = (evt, callback)->
		evt_callbacks[evt] ||= [];
		evt_callbacks[evt].push callback

	emit = (evt, data)->
		cbs = evt_callbacks[evt]
		return console.error "No puedo notificar a <#{evt}>, porque no tengo callbacks" if !cbs

		for callback in cbs
			try
				callback(data)
			catch e
				console.error("Error de callback");
				console.log(e.message)
				console.error(e.stack)
				console.log(e)

	w.NotificationCenter =
		on: _on,
		emit: emit

)(window)