#= require _jquery
#= require _shared

$ ()->

	Asistencias = (selector, data)->
		@cuadro =
			width: 15
			height: 15

		@container = $(selector)
		@data = data
		@calculaTamano()

		@svg = d3.select('#grafica-asistencias')
				.append('svg:svg')
				.attr('width', @container.width())
				.attr('height', (@rows*@cuadro.height)+(@margin*@rows))
		@tt = d3.select('#grafica-asistencias')
				.append('div')
					.attr('class', 'graph-tooltip')
					.text('2014-01-01')
		this

	Asistencias::draw = ()->
		self = this
		@svg.selectAll('.asistencia')
		.data(@data)
		.enter()
			.append('rect')
			.attr('width', @cuadro.width)
			.attr('height', @cuadro.height)
			.attr('class', @cuadro_clase)
			.attr('x', @cuadro_x.bind(this))
			.attr('y', @cuadro_y.bind(this))
			.on('mouseover', (d)-> self.cuadro_hover(d, this))
			.on('mouseout', (d)-> self.cuadro_out(d, this))


	Asistencias::cuadro_hover = (d, cuadro)->
		@tt.classed('shown', true)
		@tt.text(d.fecha)
		$cuadro = $(cuadro)
		pos = $cuadro.position()
		centro =
			x: pos.left+cuadro.getAttribute('width')/2
			y: pos.top+cuadro.getAttribute('height')/2
		
		bbox = window.getComputedStyle(@tt.node())
		w = parseInt(bbox.width,10)
		h = parseInt(bbox.height,10)

		left = centro.x-(w/2)-4
		top = centro.y-h-8-15
		@tt.style('left', left+'px').style('top', top+'px')

	Asistencias::cuadro_out = ()->
		@tt.classed('shown', false)

	Asistencias::resize = ()->
		@calculaTamano()
		@svg.transition()
			.attr('width', @container.width())
			.attr('height', (@rows*@cuadro.height)+(@margin*@rows))

		@svg.selectAll('.asistencia')
			.transition()
				.attr('x', @cuadro_x.bind(this))
				.attr('y', @cuadro_y.bind(this))

	Asistencias::calculaTamano = ()->
		cw = @container.width()
		@perRow = Math.floor(cw/(@cuadro.width+2))
		@margin = (cw-(@perRow*@cuadro.width))/(@perRow-1)
		@rows = Math.ceil(@data.length/@perRow)

	Asistencias::cuadro_x = (d, i)->
		orig = (i%@perRow)
		start = orig*@cuadro.width
		offset = @margin*orig
		start+offset

	Asistencias::cuadro_y = (d, i)->
		orig = Math.floor(i/@perRow)
		start = orig*@cuadro.height
		offset = @margin*orig
		start+offset

	Asistencias::cuadro_clase = (d)->
		c = d.valor && 'presente' || 'ausente'
		"asistencia #{c}"






	Votaciones = (selector, data)->
		@container = $(selector)
		@data = data

		@svg = d3.select('#grafica-votaciones')
				.append('svg:svg')
				.attr('width', @container.width())
				.attr('height', 100)
		@tt = d3.select('#grafica-votaciones')
				.append('div')
					.attr('class', 'graph-tooltip')
					.text('100%')

		@calculaTamano()
		self = this
		
		

		this


	Votaciones::toInt = (str)-> parseInt(str.replace(/\D/g, ''), 10)

	Votaciones::draw = ()->
		self = this
		@line = d3.svg.line()
					.interpolate("monotone")
					.x( (d, i)-> self.x(i) )
					.y( (d)-> self.y(d.valor) )

		@svg.append('path')
			.datum(@data)
			.attr("class", "linea-votacion")
			.attr('d', @line)
			.attr('fill', 'transparent')


		@svg.append('g').selectAll('.punto-votacion')
			.data(@data)
			.enter()
				.append('circle')
				.attr('class', 'punto-votacion')
				.attr('r', '2')
				.attr('cx', (d, i)-> self.x(i) )
				.attr('cy', (d)-> self.y(d.valor) )


		@rect = @svg.append('rect')
				.attr("class", "overlay")
				.attr('opacity', 0)
				.attr("width", @container.width())
				.attr("height", @container.height())

		@inc = @x(1)-@x(0)
		@rect.on 'mouseout', ()->
			self.tt.classed('shown', false)

		@rect.on 'mousemove', ()->
			x0 = self.x.invert(d3.mouse(this)[0])
			x = Math.round(x0)
			punto = self.data[x]
			self.tt.classed('shown', true)
			self.tt.text("#{punto.fecha}: #{punto.valor}%");
			bbox = window.getComputedStyle(self.tt.node())
			w = parseInt(bbox.width,10)
			h = parseInt(bbox.height,10)

			left = self.x(x)-w/2-4
			top = self.y(punto.valor)-h-15
			self.tt.style('left', left+'px').style('top', top+'px')


	Votaciones::resize = ()->
		@calculaTamano()
		@svg.transition()
			.attr('width', @container.width())

		@svg.selectAll('.overlay')
			.attr("width", @container.width())
			.attr("height", @container.height())

		@svg.selectAll('.linea-votacion').transition()
			.attr('d', @line)

	Votaciones::calculaTamano = ()->
		cw = @container.width()
		ch = @container.height()
		@x = d3.scale.linear()
				.domain([0, @data.length])
				.range([0, cw])

		@y = d3.scale.linear()
				.range([5,ch-5])
				.domain([100,0])

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