(function($) {

	"use strict";

	
	function onHoverthreeDmovement() {
		var tiltBlock = $('.js-tilt');
		if(tiltBlock.length) {
			$('.js-tilt').tilt({
				maxTilt: 20,
				perspective:700, 
				glare: true,
				maxGlare: 0
			})
		}
	}


	// testimonial-carousel
	if ($('.testimonial-carousel-five').length) {
		$('.testimonial-carousel-five').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}



/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions;
			onHoverthreeDmovement();
		})(jQuery);
	});





/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

   $(window).on('scroll', function() {

   	
   	
   	
   });
   

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

   $(window).on('load', function() {

   	
   	
   	
   });



})(window.jQuery);