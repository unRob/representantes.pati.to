((w)->

	if typeof w['history'] is undefined
		w.State = {push: ()->}
		return true;
	
	h = w.history
	ret = {}
	wt = $('title');

	ret.push = (url, title, data)->
		if url['state']
			[url, title, data] = url.state()

		wtitle = "¿Quién me representa?"
		wtitle += " - #{title}" if title;
		h.pushState(data, wtitle, url)
		w.title = title;
		w.document.title = title
		wt.text(title);

		console.log("Navigation to #{url} with data", data)

		NotificationCenter.emit('history.change', {url: url, state:false});

	ret.pop = ()->
		history.back();

	popped = false
	initialURL = location.href

	w.onpopstate = (evt)->
		initialPop = !popped && location.href == initialURL;
		console.log(popped, initialURL, location.href)
		popped = true;
		return true if initialPop
		url = window.location.href.replace(window.location.origin, '')
		NotificationCenter.emit('history.change', {url: url, state: evt.state});

	w.State = ret



)(window)