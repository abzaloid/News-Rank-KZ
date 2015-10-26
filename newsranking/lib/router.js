Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
 	waitOn: function() { 
 		return [Meteor.subscribe('links')]; 
 	}
});

Router.route('/', {
	name: 'home'
});

Router.route('/suggest', {
	name: 'suggest'
});

Router.route('/about', {
	name: 'about'
});

Router.route('/help', {
	name: 'help'
});