define([
	'jquery',
	'underscore',
	'backbone',
], function ($, _, Backbone) {

	'use strict';
	
	var CounterView = Backbone.View.extend({
	
		count = 0;
		
		initialize: function() {
		
		},
		
		events: {
			'clickSpan': 'addToCounter',
			'click strong': 'removeView'
		},
		
		render: function() {
			var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times.<strong>REMOVE</strong></h3>';
			this.$el.html(html);
			return this;
		},
		
		addToCounter: function () {
			this.count+;
			this.render();
		},
	
	});
	
});