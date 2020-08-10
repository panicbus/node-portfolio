var tooSmall = false;
var controller = null;
var maxWidth = 959;

if( $(window).width() < maxWidth ) {
	tooSmall = true;
}

function initScrollMagic() {
	$('body').scrollTop( 0 );
	const controller = new ScrollMagic.Controller();

	var introHeight = $('#intro').height(), 
			spaceHeight = $('#spacey').height(), 
			skillsHeight = $('#skills').height(),
			portfolioHeight = $('#portfolio').height(),
			jobHeight = $('#job').height(),
			leftSide = $('.container__left').height();
	
	var elementHeight = introHeight + spaceHeight + skillsHeight + portfolioHeight + jobHeight - leftSide;

	new ScrollMagic.Scene({
		duration: elementHeight,
		triggerElement: '.split-scroll',
		triggerHook: 0
	})
	.setPin('.split-scroll')
	// .addIndicators()
	.addTo(controller);
}

if( !tooSmall ) {
	initScrollMagic();
}

// part of the problem is that window resizes can trigger multiple times as the events fire rapidly
// this solution prevents the controller from being initialized/destroyed more than once
$(window).resize( function() {
	var wWidth = $(window).width();
	if( wWidth < maxWidth ) {
		if( controller !== null && controller !== undefined ) {
			// completely destroy the controller
			controller = controller.destroy( true );
			// if needed, use jQuery to manually remove styles added to DOM elements by GSAP etc. here
		}
	} else if( wWidth >= maxWidth ) {
		if( controller === null || controller === undefined ) {
			// reinitialize ScrollMagic only if it is not already initialized
			initScrollMagic();
		}
	}
});
