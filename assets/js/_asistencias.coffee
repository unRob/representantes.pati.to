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