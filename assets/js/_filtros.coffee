$ ()->

	
	window.filtros = ()->
		activos = []
		inactivos = []
		$('.filtro').each (index, el)->
			$el = $(el);
			activo = $el.hasClass('activo')
			set = if activo then activos else inactivos
			set.push($el.data('filtro'))
		{activos: activos, inactivos:inactivos}


	$('#filtros').on 'click', '.filtro', (evt)->
		evt.preventDefault();
		$(this).toggleClass('activo');
		NotificationCenter.emit('filtros', window.filtros())