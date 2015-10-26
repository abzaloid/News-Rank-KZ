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

		if (!url || !title) {
			Notifications.error('Заполните все поля!', 'Нужно ввести ссылку на статью и ее название');		    
			return;
		}

		Links.insert({
			link: url,
			title: title,
			votes: 1,
			views: 0, 
			added: new Date(),
		});

		Notifications.success('Спасибо!', 'Новая ссылка добавлена');		    

		Router.go('home');

	}
});