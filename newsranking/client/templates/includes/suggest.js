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

		if (!url) {
			Notifications.error('Заполните все поля!', 'Нужно ввести ссылку на статью и ее название');		    
			return;
		}

		if (url.length > 7) {
			if (url.substring(0, 7) !== "http://")
				url = "http://" + url; 
		} else {
			url = "http://" + url;
		}

		$("#url-send").val(url);
		
		$("#sacha-spinner").show();

		HTTP.call("GET", url, {},
          function (error, result) {
			$("#sacha-spinner").hide();        
            if (error) {
            	Notifications.error('Неправильный адрес!', 'Пожалуйста, проверьте правильность введенного вами адреса');
            } else {
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
	}
});