$(document).ready(function() {
	
	// remove split scrolling if small size
	var viewportWidth = $(window).width();
	if (viewportWidth < 959) {
	    $('.container__left').removeClass('split-scroll');
	}

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

	// // For a relevant time of day welcome message
	// $(document).ready(function(){
	// 	var hour = new Date().getHours();
	// 	var msgBox = $('.welcome-msg')
	// 	if (hour > 0 && hour <= 11){
	// 		msgBox.text('Good morning');
	// 	} else if (hour > 11 && hour <= 17 ) {
	// 		msgBox.text('Good afternoon');
	// 	} else {
	// 		msgBox.text('Good evening');
	// 	}
	// })


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
