#= require _jquery
#= require _shared
#= require _mustache
#= require _templates
#= require _history

$ ()->

	Templates.setup($('.render-template'))

	searchReq = null
	searchTO = null
	form = $('#buscador')
	boton = $('#doSearch')
	total = $('#total')
	resultados = $('#resultados')
	input = $('#nombre-busqueda')

	doSearch = ()->

		searchReq.abort() if searchReq;
		
		if $.trim(input.val()) == ''
			$('#resultados').html('')
			return false

		boton.attr('disabled', 'disabled')
		data = form.serialize()
		History.pushState(null, "Búsqueda: #{input.val()}", "/busqueda?#{data}")

		searchReq = $.ajax {method: 'post', data: data}

		searchReq.done (data)->
			total.text(data.total)
			html = ''
			for resultado in data.resultados
				html += Templates['representante'](resultado)

			$('#resultados').html(html)


		searchReq.always ()->
			boton.removeAttr('disabled');

	input.on 'keyup', (evt)->
		clearTimeout searchTO
		searchTO = setTimeout doSearch, 200

	$('#buscador').on 'submit', (evt)->
		evt.preventDefault();		
		doSearch()
