 $(document).ready(function() {

	$("#owl-demo").owlCarousel({
	    autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 3,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [979,3]
	});

  $(window).resize(function() {
    $('.header-title').css({
      'position' : 'absolute',
      'top' : '50%',
      'margin-top' : -$('.header-title').height()/2
    });
  });
  $(window).resize();


});
