Votaciones = (selector, data)->
	@container = $(selector)
	@data = data

	@svg = d3.select('#grafica-votaciones')
			.append('svg:svg')
			.attr('width', @container.width())
			.attr('height', 100)

	@overlay = d3.select('#grafica-votaciones').append('div')
			.attr("class", "grafica-overlay")

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


	#@svg.append('g').selectAll('.punto-votacion')
	#	.data(@data)
	#	.enter()
	#		.append('circle')
	#		.attr('class', 'punto-votacion')
	#		.attr('r', '2')
	#		.attr('cx', (d, i)-> self.x(i) )
	#		.attr('cy', (d)-> self.y(d.valor) )

	@inc = @x(1)-@x(0)
	@overlay.on 'mouseout', ()->
		self.tt.classed('shown', false)

	@overlay.on 'mousemove', ()->
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