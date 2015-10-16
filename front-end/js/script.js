(function(){
	$('.menu-btn').on('click', function(){
		$('.mobile-menu').toggleClass('is-open');
		$('html, body').toggleClass('hide');
	});
})();