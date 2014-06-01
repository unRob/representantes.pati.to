$ ()->

	creaRepeatable = (evt)->
		evt.preventDefault()
		clone = $(this).clone(true)
		$(this).after(clone)
		$(this).find('input, select, textarea').removeAttr('disabled');
		$(this).find('.select2-container').remove()
		
		$(this).find('.select2-input').each (index, el)->
			$(el).select2(window[$(el).data('s2opts')] || {})
		$(this).removeClass('repeatable');
		$(this).find('input, select, textarea').eq(0).focus();
		

	$('.repeatable-container').on 'click focus', '.repeatable', creaRepeatable
	#$('.repeatable-container').on 'focus', '.repeatable-tab-action', creaRepeatable
		
	$('.repeatable-container').on 'click', '.borra-repeatable', (evt)->
		evt.preventDefault();
		evt.stopPropagation();
		$(this).parent().remove();
		try
			action = $(this).data('action')
			window[action]() if action
			window.NotificationCenter.emit('repeatable.delete', this)
		catch err
			console.log('NC Error repeatable.delete');
			console.error(err)


	#window.repeatableSort = ()->
	if ($.sortable)
		$('.repeatable-container').sortable({
			handle: '.drag-handle',
			placeholder: 'repeatable-placeholder',
			forcePlaceholderSize: true,
			forceHelperSizeType: true,
			helper: 'clone',
			items: "> li",
			cursorAt: {left: 1}
		});
	