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
