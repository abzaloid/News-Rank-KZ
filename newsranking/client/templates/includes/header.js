Template.header.events({
	'click .menu-btn': function () {
		$('.mobile-menu').toggleClass('is-open');
		$('html, body').toggleClass('hide');		
	}
});

Template.header.rendered = function () {
	_.extend(Notifications.defaultOptions, {
        timeout: 2500
    });
};