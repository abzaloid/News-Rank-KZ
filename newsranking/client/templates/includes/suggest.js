Template.suggest.helpers ({

});

Template.suggest.events({
	'click #guess-title': function (e) {
		e.preventDefault();

	},
	'submit form': function (e) {
		e.preventDefault();

		var url = $("#url-send").val(),
			title = $("#title-send").val();

		Links.insert({
			link: url,
			title: title,
			votes: 1,
			views: 0, 
			added: new Date(),
		});

		window.location.replace('/');

	}
});