# Templates

Templates = {}
Templates.setup = (els)->
	els.each (index, tpl)->
		id = tpl.id.replace('tpl-', '')
		Templates[id] = ((str)->
			Mustache.parse str
			(data)->
				Mustache.render(str, data)
		)(tpl.innerText)
		true