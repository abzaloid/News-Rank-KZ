Template.link.events({
	'click .upvote': function (e) {
		e.preventDefault();
		var _id = $(e.currentTarget).attr('id');
		Links.update({_id: _id}, {$inc: {votes: 1}});
	}
});