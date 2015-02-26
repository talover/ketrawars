$(document).on('ready', function() {
	//Sidebar tabs
	$('#win_tab1').fadeIn();
	$('.tab-link').on('click', '.tabl', function(event) {
		var $this = $(this),
			linkTo = $this.attr('href'),
			line = $('.tab-link').find('.line > i');

		$this.addClass('active')
			.siblings().removeClass('active');

		$('.tabs-content').find(linkTo)
			.fadeIn('300').siblings().fadeOut('300');

		if (linkTo == '#win_tab2') {
			line.css('left', '42px');
		} else if (linkTo == '#win_tab3'){
			line.css('left', '78px');
		} else {
			line.css('left', '0px');
		}

		event.preventDefault();
	});

	//Hover menu left
	var $arrow = $('.main-menu-slide .arrow');
	$('.left-sidebar .main-menu').hover(function() {
		$arrow.fadeIn('fast');
	}, function() {
		$arrow.fadeOut('fast');
	});

	$('.left-sidebar .main-menu li').hover(function() {
		$arrow.css('top', $(this).position().top);
	});

});
