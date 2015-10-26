Template.header.events({
	'click .menu-btn': function () {
		$('.mobile-menu').toggleClass('is-open');
		$('html, body').toggleClass('hide');		
	}
});
