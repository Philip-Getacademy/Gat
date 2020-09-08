/* WRITER Philip N�sgaard */


/* -------------------------------------------------------------- open page script start -------------------------------------------------------------- */
/* --------------------------------------------------- onclick script transformation parameters ------------------------------------------------------- */


var header_footer_true_gate = false;



function header_footer(header_height) {	


	if ( header_footer_true_gate == false) {
		
		
		$('.header').stop().animate({'height':"50vh"},300);
		$('.footer').stop().animate({'height':"50vh"},300);
		header_footer_true_gate = true;

	} else {
		
		$('.header').stop().animate({'height':"10vh"},300);
		$('.footer').stop().animate({'height':"10vh"},300);
		header_footer_true_gate = false;
	}

}



/* -------------------------------------------------------------- open page script end ---------------------------------------------------------------- */

