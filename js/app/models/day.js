define([
	'backbone',
], function (Backbone) {

	'use strict';
	
	var DayModel = Backbone.Model.extend({
		defaults: {
			'highCelsius': 'null',
			'lowCelsius': 'null',
			'highFahrenheit': 'null',
			'lowfahrenheit': 'null',
			'icon_url': '',
		},
		parse: function (data) {
			var map = {
				'highCelsius': data.high.celsius,
				'lowCelsius': data.low.celsius,
				'highFahrenheit': data.high.fahrenheit,
				'lowfahrenheit': data.low.fahrenheit,
				'icon_url': data.icon_url
			};
		};
		
		
	});
	
	return DayModel;

});