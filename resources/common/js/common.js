;(function($){
	'use strict';

	/* trigger when page is ready */
	$(function(){

			$('.j-slider_info').bxSlider({
				auto: true,
				pause: 4000,
				mode: 'fade',
				captions: true,
				controls: false
			});

	});

	/* optional triggers
	$(window).load(function() {

	});

	$(window).resize(function() {

	});
	*/
}(window.jQuery));