/* WRITER Philip Næsgaard */


/* -------------------------------------------------------------- open page script start -------------------------------------------------------------- */
/* --------------------------------------------------- onclick script transformation parameters ------------------------------------------------------- */





function header_footer() {	

	var height = document.getElementsByClassName('header').height;



	if (height == '50vh') {
		
		
		$('.header').data('height', 'small');
		$('.header').stop().animate({'height':'50vh'},300);

		$('.footer').data('height', 'small');
		$('.footer').stop().animate({'height':'50vh'},300);

	} else {
		
		$('.header').data('height', 'big');
		$('.header').stop().animate({'height':'10vh'},300);

		$('.footer').data('height', 'big');
		$('.footer').stop().animate({'height':'10vh'},300);
	}

}



/* -------------------------------------------------------------- open page script end ---------------------------------------------------------------- */

