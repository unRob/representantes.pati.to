#= require _jquery
#= require _shared
#= require _repeatable
#= require _fbsdk
#= require _templates
#= require _mustache

$ ()->

	Templates.setup($('.render-template'))

	$('.tab').hide();
	$('#search-modifier').hide();

	exps =
		facebook: /https?:\/\/(www\.)?facebook\.com/
		twitter: /https?:\/\/(www\.)?twitter\.com/
		youtube: /https?:\/\/(www\.)?youtube\.com/
		instagram: /https?:\/\/instagram\.com/


	$('form').on 'keyup', '.link input', (evt)->
		val = $.trim(this.value);
		return if val == ''
		for serv, exp of exps
			if exp.test val
				$(this).parent().find('select').val(serv);
				break
	
	csTO = null
	$('#search-modifier').on 'keyup', (evt)->
		val = this.value
		clearTimeout(csTO)
		obj = window[$(this).data('engine')];
		csTO = setTimeout ()->
			$('.results').empty()
			console.log('searching!', val);
			obj.custom_search(val)
		, 500

	window.Feisbuc = 
		custom_search: (term)->
			Feisbuc.execute_search(term, 'user')
			Feisbuc.execute_search(term, 'page')
		execute_search: (name, type)->
			FB.api('/search', Feisbuc.place_profiles, {q: name, type: type})
		place_profiles: (data)->
			base = 'https://www.facebook.com/'
			data.data.forEach (perfil)->
				return if perfil.category && perfil.category isnt 'Public figure'
				if ($("#perfil-facebook-#{perfil.id}").length == 0)
					perfil.url = base+'app_scoped_user_id/'+perfil.id
					perfil.url = base+perfil.id if perfil.category
					$('#perfiles-facebook .results').append(Templates['perfil-facebook'](perfil))
		load_profiles: ()->
			nombres = $('#nombre').val()
			apellidos = $('#apellido').val()

			Feisbuc.execute_search(nombres+" "+apellidos, 'user')
			Feisbuc.execute_search(nombres+" "+apellidos, 'page')

			if (nombres.split(' ').length > 1)
				console.log('multiple')
				nombres.split(' ').forEach (nombre)->
					Feisbuc.execute_search(nombre+" "+apellidos, 'page')
					Feisbuc.execute_search(nombre+" "+apellidos, 'user')


	window.Tuiter =
		custom_search: (term)->
			term = encodeURIComponent(term)
			$('#perfiles-tuiter .results').attr('src', "https://twitter.com/search?q=#{term}&src=typd&mode=users")
		load_profiles: ()->
			nombres = $('#nombre').val()
			apellidos = $('#apellido').val()
			Tuiter.custom_search(nombres+" "+apellidos)


	showTab = (cual)->
		$('.tab').hide();
		$("#perfiles-#{cual}").show();
		nombres = $('#nombre').val();
		apellidos = $('#apellido').val();
		$('#search-modifier').show().val("#{nombres} #{apellidos}");

	$('#perfiles-facebook').on 'click', '.add', (evt)->
		$el = $(this)
		evt.preventDefault();
		return false if $el.data('added')
		self = this
		id = $el.parents().attr('id').replace(/\D/g, '')
		console.log("id: #{id}");
		FB.api "/#{id}", (d)->
			#self.href = d.link;
			console.log(d);
			$el.data('added', true)

		return false

	$('#twitter-lookup').click (evt)->
		showTab('tuiter');
		$("#search-modifier").data('engine', 'Tuiter')
		Tuiter.load_profiles()


	$('#fb-lookup').click (evt)->
		evt.preventDefault()
		showTab('facebook');
		$("#search-modifier").data('engine', 'Feisbuc')
		FB.getLoginStatus (res)->
			if res.status isnt 'connected'
				FB.login (data)->
					if (data.status == 'connected')
						window.NotificationCenter.emit('facebook:login', data)
						Feisbuc.load_profiles()
			else
				Feisbuc.load_profiles()

	$('form').on 'submit', (evt)->
		$('.link:not(.repeatable)').each (index, el)->
			$el = $(el);
			$el.find('input, select, textarea').each (i, el)->
				el.name = el.name.replace("{{index}}", index)