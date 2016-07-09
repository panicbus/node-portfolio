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

	// Responsive navbar menu
	var smNav = $('.sm-navbar-nav');
	$('.fa-bars').click(function(){
    // make sure the lg scren nav hides
		$('.navbar-nav.large').css('display', 'none');
    // remove any active class if overlay was closed on nav item click
    // then add active class for displaying sm screen nav overlay
    if (smNav.is('active')) {
			smNav.removeClass('active');
    }
    smNav.fadeToggle().toggleClass('active')
    $('fa-bars').css('color', '#ecf0f1 !important');
	})
  // Close the overlay on nav item click
  $('.sm-navbar-nav li a').click(function() {
    $('.sm-navbar-nav').removeClass('active').fadeOut();
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
			$('.work-scroll').addClass('active');
		}
		if (pageScroll > spaceyScroll && pageScroll <= portfolioScroll ) {
			$('.page-scroll').removeClass('active');
			$('.spacey-scroll').addClass('active');
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
	})

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

	// For the welcome message
	$(document).ready(function(){
		date = new Date();
		hour = date.getHours();
		msgBox = $('.welcome-msg')
		if (hour > 0 && hour <= 11){
			msgBox.text('Good morning');
		} else if (hour > 11 && hour <= 17 ) {
			msgBox.text('Good afternoon');
		} else {
			msgBox.text('Good evening');
		}
	})

	// NODEMAILER
	// var from, to, subject, text;
	// $('#send_email').click(function(e){
	//	 e.preventDefault();
	//	 to = $('#name').val();
	//	 subject = 'Message from website';
	//	 text = $('#message').val();
	//	 $('.notification-container').text('Sending E-mail...Please wait');
	//	 $.get('http://localhost:3000/send', { to: to, subject: subject, text: text }, function(data){
	//		 console.log('b o o m d: ' + data)
	//		 if(data == 'sent'){
	//			 $('.notification-container').empty().html('Email is been sent to ' + to + ' . Please check your inbox!');
	//		 }
	//	 });
	// });

		// $(document).ready(function(){
		// 	setTimeout(function(){$('.corner-top-left').addClass('displayNone');}, 2900);
		// 	setTimeout(function(){$('.corner-top-right').addClass('displayNone');}, 3200);
		// 	setTimeout(function(){$('.corner-bottom-right').addClass('displayNone');}, 3500);
		// 	setTimeout(function(){$('.corner-bottom-left').addClass('displayNone');}, 3800);
		// 	setTimeout(function(){$('.top-top, .center-text').addClass('displayNone');}, 6000);
		// })

		// $(document).ready(function(){
		// 	$('.good-morning')
		// 		.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		// 	    $('.good-morning').css('display', 'none');
		// 	 	});
		// });

		$(document).ready(function(){
			$("#someSelector").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				 $('.good-morning').hide();
			});
			$("#someSelector").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
				 $('.good-morning').hide();
			});
		});


		// $(document).ready(function() {
		// 		 // Fakes the loading setting a timeout
  //            console.log('one')
  //            $('.overlay-container').addClass('welcome-overlay');
  //        setTimeout(function() {
  //            $('.overlay-container').removeClass('welcome-overlay');
  //          console.log('two')
  //        }, 5000);

		// });


});
