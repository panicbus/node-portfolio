/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// for navbar change on scroll
$(window).scroll(function() {
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
		$('.logo').css('display', 'none');
		$('.nav-logo').css('display', 'block');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
		$('.logo').css('display', 'block');
		$('.nav-logo').css('display', 'none');
	}
});

// for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});