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

	// Collapsed nav
	var smNav = $('.sm-navbar-nav');
	$('.fa-bars').click(function(){
		$('.navbar-main-collapse').css('display', 'none');
		smNav.fadeToggle('.sm-navbar-nav').toggleClass('active')
		$('fa-bars').css('color', '#ecf0f1 !important');
		if (!smNav.hasClass('active')) {
			smNav.css('display', 'none');
		}
	})

	// for page scroll to feature - uses jQuery Easing plugin
	// http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			event.preventDefault();
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 50
			}, 1500, 'easeInOutExpo');
			// get rid of the nav on small
			$('.sm-navbar-nav').removeClass('active')
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


	// Closes the Responsive Menu on Menu Item Click
	// $('.navbar-collapse ul li a').click(function() {
	// 	$('.navbar-toggle:visible').click();
	// });


	$('#owl').owlCarousel({
		autoplay: 200,
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

	$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			responsive:{
					0:{
							items:1,
							nav:true
					},
					600:{
							items:3,
							nav:false
					},
					1000:{
							items:5,
							nav:true,
							loop:false
					}
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



	// $(window).resize(function() {
	//	 $('.header-title').css({
	//		 'position' : 'absolute',
	//		 'top' : '50%',
	//		 'margin-top' : -$('.header-title').height()/2
	//	 });
	// });
	// $(window).resize();

		// $(document).ready(function() {
		//		 // Fakes the loading setting a timeout
		//		 setTimeout(function() {
		//				 $('body').addClass('loaded');
		//		 }, 3000);

		// });


});
