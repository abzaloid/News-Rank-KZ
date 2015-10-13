Meteor.publish('links', function () {
	return Links.find();
});
