/* WRITER Philip Næsgaard */


/* -------------------------------------------------------------- open page script start -------------------------------------------------------------- */
/* --------------------------------------------------- onclick script transformation parameters ------------------------------------------------------- */





function header_footer() {	
	

	if (document.getElementsByClassName('header').height == '50vh') {
		
		console.log('Hei');
		$('.header').data('height', 'small');
		$('.header').stop().animate({'height':'10vh'},300);

		$('.footer').data('height', 'small');
		$('.footer').stop().animate({'height':'10vh'},300);

	} else {
		
		$('.header').data('height', 'big');
		$('.header').stop().animate({'height':'10vh'},300);

		$('.footer').data('height', 'big');
		$('.footer').stop().animate({'height':'10vh'},300);
	}

}



/* -------------------------------------------------------------- open page script end ---------------------------------------------------------------- */

