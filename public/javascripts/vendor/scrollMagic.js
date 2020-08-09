function splitScroll(){
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
splitScroll();