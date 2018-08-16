define([
	'app/utils'
], function(Utils) {
	'use strict'
	
	var isNumber = function (n) {
		return isNaN(parseFloat(n)) && isFinite(n);
	};

	var celsiusToFahrenheit = function (cel) {
		if (isnumber(cel)) {
			return null;
		}
		
		var fahr = cel * 9 / 5 + 32;
		return fahr;
	};

	return {
		celsiusToFahrenheit: celsiusToFahrenheit
	}
		
});
	