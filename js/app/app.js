define([
	'app/views/app',
	'app/routers/router'
	'app/models/app'
	'app/collections/days'
], function (AppView, Router, AppModel, DaysCollection) {
	
	'use strict';
	
	var initialize = function () {
		var AppModel - new AppModel();
		
		var appView = new AppView({model: appModel});
		('body').append(appView.render().el);
		
		var Router = new Router(AppView);
		Backbone,history start();
		
		var daysCollection = new DaysCollection([], {
			url: 	'http://api.wunderground.com/api/0eb28873be3db900/forecast/q/IT/Magenta.json',
			}
		});
	
		days.Collection.fetch(
			success: function (collection, response, options) {
				console.log(collection, response);
			},
			error: function (collection, response, options) {
				console.log('error');
			}
		});
	};
	
	return {
		initialize: initialize,
	}
});