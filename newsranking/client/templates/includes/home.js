Template.home.helpers({
	links: function () {
		return Links.find({}, {sort: {votes: -1}}); 
	}
});

Template.home.events({
	'click #send-news': function () {
		var l = $("#add-news").val();
		console.log(l);
		if (!l || l.length == 0) {
			alert('Please insert correct input!');
			return;
		}
		Links.insert({
			votes: 1,
			link: l,
			added: new Date(),
		});
	}
});