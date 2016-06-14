$(document).ready(function() {

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

	// for page scroll to feature - uses jQuery Easing plugin
	// http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			event.preventDefault();
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 50
			}, 1500, 'easeInOutExpo');
		});
	});

	// tab highlighting on section scroll
  $(document).scroll(function(){

    var pageScroll = $(this).scrollTop();
    var aboutScroll = $('#about').offset().top - 51;
    var portfolioScroll = $('#portfolio').offset().top - 51;
    var contactScroll = $('#contact').offset().top - 51;

    if (pageScroll <= aboutScroll ) {
      $('.page-scroll').removeClass('active');
      $('.work-scroll').addClass('active');
    }
    if (pageScroll > aboutScroll && pageScroll <= portfolioScroll ) {
      $('.page-scroll').removeClass('active');
      $('.about-scroll').addClass('active');
    }
    if (pageScroll > portfolioScroll && pageScroll <= contactScroll ) {
      $('.page-scroll').removeClass('active');
      $('.portfolio-scroll').addClass('active');
    }
    if (pageScroll > contactScroll ) {
      $('.page-scroll').removeClass('active');
      $('.contact-scroll').addClass('active');
    }
  })


  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  $('.work-tile').each(function(){
    $(this).css('background', getRandomColor());
  })


	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});


	$('#owl').owlCarousel({
    autoplay: 200,
    items: 3,
    slideBy: 3,
    // dotsEach: 3,
    loop: true,
    center: true,
    dots: true,
    itemsDesktop: [1199,3],
    itemsDesktopSmall: [979,2]
	});

  $(window).resize(function() {
    $('.header-title').css({
      'position' : 'absolute',
      'top' : '50%',
      'margin-top' : -$('.header-title').height()/2
    });
  });
  $(window).resize();



    $(document).ready(function() {
        // Fakes the loading setting a timeout
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 3000);

    });


});
