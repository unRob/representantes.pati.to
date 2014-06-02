#= require _jquery
#= require _shared
#= require _d3
#= require _asistencias
#= require _votaciones

$ ()->


	dataAsistencias = []
	dataVotaciones = []
	$('.asistencia').each (index, el)->
		$el = $(el)
		fecha = $el.children('dt').text()
		valor = ($el.children('dd').text() == 'si') && true || false
		dataAsistencias.push({fecha: fecha, valor: valor});

	$('.votacion').each (index, el)->
		$el = $(el)
		fecha = $el.children('dt').text()
		valor = parseInt($el.children('dd').text(), 10)
		dataVotaciones.push({fecha: fecha, valor: valor});


	$('#data-asistencias').replaceWith('<div id="grafica-asistencias" class="grafica">')
	grafica_asistencias = new Asistencias('#grafica-asistencias', dataAsistencias);
	grafica_asistencias.draw();

	$('#data-votaciones').replaceWith('<div id="grafica-votaciones" class="grafica">')
	grafica_votaciones = new Votaciones('#grafica-votaciones', dataVotaciones);
	grafica_votaciones.draw();

	NotificationCenter.on 'resize', ()->
		grafica_asistencias.resize();
		grafica_votaciones.resize();