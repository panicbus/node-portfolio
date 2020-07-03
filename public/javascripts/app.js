$(document).ready(function() {

 	// for navbar change on scroll
	// .fa-bars only shows on mobile
	$(window).scroll(function() {
		if ($('.navbar').offset().top > 50) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
			$('.logo').css('display', 'none');
			$('.nav-logo').css('display', 'block');
			$('.fa-bars').css('color', '#ecf0f1');
		} else {
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
			$('.logo').css('display', 'block');
			$('.nav-logo').css('display', 'none');
			$('.fa-bars').css('color', '#282828');
		}
	});

	// preload main splash and galaxy images
	var images = [];
	function preload() {
    for (var i = 0; i < arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
	}
	preload(
    "../../images/dead-sky1.jpg",
    "../../images/p-galaxy.jpg"
	)


	// Responsive navbar menu
	var smNav = $('.sm-navbar-nav');
	// var splashBackground = $('#splash');
	$('.fa-bars').click(function(){
    // make sure the lg scren nav hides
		$('.navbar-nav.large').css('display', 'none');
    // remove any active class if overlay was closed on nav item click
    // then add active class for displaying sm screen nav overlay
    smNav.fadeToggle().toggleClass('active')
    // don't scroll the background
	  if (smNav.hasClass('active')) {
			$('body').css('overflow-y', 'hidden');
	  }
    $('fa-bars').css('color', '#ecf0f1 !important');
	})
  // Close the overlay on nav item click
  $('.sm-navbar-nav li a').click(function() {
    $('.sm-navbar-nav').removeClass('active').fadeOut();
		$('body').css('overflow-y', 'visible');
  });


  // for page scroll to feature - uses jQuery Easing plugin
  // http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
  $(function() {
    $('a.page-scroll').bind('click', function(e) {
      e.preventDefault();
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 50
      }, 1500, 'easeInOutExpo');
    });
  });


	// tab highlighting on section scroll
	$(document).scroll(function(){

		var pageScroll = $(this).scrollTop();
		var spaceyScroll = $('#spacey').offset().top - 51;
		var portfolioScroll = $('#portfolio').offset().top - 51;
		var contactScroll = $('#contact').offset().top - 51;

		if (pageScroll <= spaceyScroll ) {
			$('.page-scroll').removeClass('active');
		}
		if (pageScroll > spaceyScroll && pageScroll <= portfolioScroll ) {
			$('.page-scroll').removeClass('active');
			$('.spacey-scroll').addClass('active');
		}
		if (pageScroll > portfolioScroll && pageScroll <= contactScroll ) {
			$('.page-scroll').removeClass('active');
			$('.portfolio-scroll').addClass('active');
		}
		// if page reaches contact section or bottom of page
		if ((pageScroll > contactScroll || ($(window).scrollTop() + $(window).height() == $(document).height()))) {
			$('.page-scroll').removeClass('active');
			$('.contact-scroll').addClass('active');
		}
	});


	// Work section background color randomization
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
	});

	// Fixes the modal close button to top
	$('.modal').scroll(function() {
		var a = $(this).scrollTop();
		$('.modal-button-container').css('top', a + 'px');
	});


	$('#owl').owlCarousel({
		autoplay: 500,
		loop: true,
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				slideSpeed: 200,
				slideBy: 1
			},
			479:{
				items:3,
				slideSpeed: 300,
				slideBy: 3
			},
			878:{
				items:4,
				slideSpeed: 400,
				slideBy: 3
			}
		}
	});

	// For a relevant time of day welcome message
	$(document).ready(function(){
		var hour = new Date().getHours();
		var msgBox = $('.welcome-msg')
		if (hour > 0 && hour <= 11){
			msgBox.text('Good morning');
		} else if (hour > 11 && hour <= 17 ) {
			msgBox.text('Good afternoon');
		} else {
			msgBox.text('Good evening');
		}
	})

	// the good morning animation
	// function animateRotate(angle) {
	//     // caching the object for performance reasons
	//     var $elem = $(this);

	//     // we use a pseudo object for the animation
	//     // (starts from `0` to `angle`), you can name it as you want
	//     $({deg: 0}).animate({deg: angle}, {
	//         duration: 2000,
	//         step: function(now) {
	//             // in the step-callback (that is fired each step of the animation),
	//             // you can use the `now` paramter which contains the current
	//             // animation-position (`0` up to `angle`)
	//             $elem.css({
	//                 transform: 'rotate(' + now + 'deg)'
	//             });
	//         }
	//     });
	// }

  $.fn.animateRotate = function(angle, duration, easing) {
  	debugger
	  return this.each(function() {
	    var $elem = $(this);
	    $({deg: 0}).animate({deg: angle}, {
	      duration: duration,
	      easing: easing
	    });
	  });
	};

	$(document).ready(function(){
		setTimeout(function(){
			$( '.corner-top-left').animate({left: '+=2500'}, 1500, function() {
		    $('corner-top-left').fadeOut();
		  });
		}, 2000);
		setTimeout(function(){
			$( '.corner-top-right').animate({right: '+=2500'}, 1500, function() {
		    $('.corner-top-right').fadeOut();
		  });
		}, 2200);
		setTimeout(function(){
			$( '.corner-bottom-right').animate({right: '+=2500'}, 1500, function() {
		    $('.corner-bottom-right').fadeOut();
		  });
		}, 2400);
		setTimeout(function(){
			$('.corner-bottom-left').animate(
			  { left: '+=2500' },
			  { deg: 720 },
			  {
			    duration: 500,
			    step: function(now) {
			      $(this).css({ transform: 'rotate(' + now + 'deg)' });
			    }
			  },
			);
		  // $('.corner-botton-left').animateRotate(360, 3000, 'linear');
			// $('.corner-bottom-left').animate({left: '+=2500'}, 1500, function() {
		 //    $('.corner-bottom-left').fadeOut();
		 //  });
		}, 2600);
		setTimeout(function(){
			$( '.top-top').animate({top: '+=2500'}, 1500, function() {
		    $('.top-top').fadeOut();
		  });
		}, 2700);
		setTimeout(function(){
			$( '.welcome-msg').animate({bottom: '+=2500'}, 1500, function() {
		    $('.welcome-msg').fadeOut();
		    // remove the whole container so links underneath are clickable
		    $('.welcome-msg-container').hide()
		  });
		}, 3000);
	});


	// calculates number of years in the biz in jobDescription section
	$(document).ready(function(){
		var currentYear = new Date().getFullYear();
		var diff = Math.abs(currentYear - 2014);
		$('.current-exp').html(diff);
	});

	// moving the submit form field labels up on focus
	[].slice.call( document.querySelectorAll( '.input' ) ).forEach( function( inputEl ) {
	    if( inputEl.value.trim() !== '' ) {
	        classie.add( inputEl.parentNode, 'input--filled' );
	    }
	    inputEl.addEventListener( 'focus', onInputFocus );
	    inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
	      classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
	      if( ev.target.value.trim() === '' ) {
	            classie.remove( ev.target.parentNode, 'input--filled' );
	      }
	}


});
