Template.home.helpers({
	links: function () {
		return Links.find({}, {sort: {votes: -1}}); 
	}
});

Template.home.events({
	'click .upvote': function (e) {
		e.preventDefault();
		var _id = $(e.currentTarget).attr('id');
		Links.update({_id: _id}, {$inc: {votes: 1}});
	},
	'click .article-meta-box__name': function (e) {
		var _id = $(e.currentTarget).attr('id').substring(5); // "title" is removed out of the id
		Links.update({_id: _id}, {$inc: {views: 1}});		
	}

});