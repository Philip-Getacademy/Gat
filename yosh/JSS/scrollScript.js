/* WRITER Philip Næsgaard */


/* -------------------------------------------------------------- open page script start -------------------------------------------------------------- */




/* -------------------------------------------------------------- open page script end -------------------------------------------------------------- */

/* -------------------------------------------------------------- Scroll script start -------------------------------------------------------------- */


$(function(){  
	$('#nav-OpenClose div')		.data('height'	,'big'); /* Assigning functions - background height					*/
	$('#navNest h6')			.data('margin'	,'big'); /* Assigning functions - margin-top/ bottom				*/
	$('.header')				.data('height'	,'big'); /* Assigning functions - header height						*/
	$('#Heading')				.data('width'	,'big'); /* Assigning functions - Heading width						*/
	$('#nav')					.data('margin'	,'big'); /* Assigning functions - nav margin						*/
	$('#Logo img')				.data('size'	,'big'); /* Assigning functions - logo size							*/
	$('#Logo')					.data('margin'	,'big'); /* Assigning functions - logo margin left					*/
	$('#nav-OpenClose')			.data('margin'	,'big'); /* Assigning functions - OpenClose margin left, also size	*/
	$('.footer')				.data('margin'	,'big'); /* Assigning functions - footer margin top					*/	
	$('#HeightHax')				.data('height'	,'big'); /* Assigning functions - footer height						*/
});



$(window).scroll(function(){
    if($(document).scrollTop() < 1 || $(document).scrollTop() == $(document).height() - $(window).height())
    {	
	$('#nav-OpenClose div').data('height','big');
    $('#nav-OpenClose div').stop().animate({'height':'14%'}							,000);
		
	$('#navNest h6').data('margin','big');
	$('#navNest h6').stop().animate({'margin-top':'3%','margin-bottom':'3%'}		,600);
		
	$('.header').data('height','big');
    $('.header').stop().animate({'height':'20%'}									,600);
		
	$('#nav').data('margin','big');
        $('#nav').stop().animate({'margin-top':'10.1%'}								,630);
		
	$('#Logo img').data('size','big');
        $('#Logo img').stop().animate({'height':'15%'}								,600);
		
	$('#Logo').data('margin','big');
        $('#Logo').stop().animate({'margin-left':'13.2%','width':'7.7%'}			,600);
		
	$('#nav-OpenClose').data('margin','big');
        $('#nav-OpenClose').stop().animate({'height':'25%'}							,000);
		
	$('#Heading').data('margin','small');
        $('#Heading').stop().animate({'width':'58%'}								,630);
		
	$('.footer').data('margin','big');
        $('.footer').stop().animate({'margin-top':'10.1%'}							,600);
		
	$('#HeightHax').data('height','big');
    $('#HeightHax').stop().animate({'padding-bottom':'39.5%'}					,600);
    }
	else
    {
	$('#nav-OpenClose div').data('height','small');
    $('#nav-OpenClose div').stop().animate({'height':'18%'}						,000);

	$('#navNest h6').data('margin','big');
	$('#navNest h6').stop().animate({'margin-top':'0.5%','margin-bottom':'0.5%'}	,300);		
		
	$('.header').data('height','small');
	$('.header').stop().animate({'height':'10%'}									,300);
		
	$('#nav').data('margin','small');
    $('#nav').stop().animate({'margin-top':'5.1%'}								,270);
		
	$('#Logo img').data('size','small');
    $('#Logo img').stop().animate({'height':'7%'}								,300);
		
	$('#Logo').data('margin','small');
    $('#Logo').stop().animate({'margin-left':'15.25%','width':'3.6%'}			,300);
		
	$('#nav-OpenClose').data('margin','small');
    $('#nav-OpenClose').stop().animate({'height':'40%'}							,000);
		
	$('#Heading').data('margin','big');
    $('#Heading').stop().animate({'width':'60%'}								,300);

	$('.footer').data('margin','small');
    $('.footer').stop().animate({'margin-top':'177%'}							,300);
		
	$('#HeightHax').data('height','small');
    $('#HeightHax').stop().animate({'padding-bottom':'0%'}						,300);
		
	
    }	
});





/* -------------------------------------------------------------- Scroll script ends -------------------------------------------------------------- */

/* -------------------------------------------------------------- Clear pages, open pages --------------------------------------------------------- */

function Side1()	{	$(this).scrollTop(300);
						$("#Side0,#Side2,#Side3,#Side4").hide();
						$("#content, #HeightHax p").css({'background':'rgba(45,48,145,0.3)'});
						$("#Side1").css({'display':'flex'});
						$("#Side1").children().show();
						return false;
}
function Side2()	{	$(this).scrollTop(300);
						$("#Side0,#Side1,#Side3,#Side4").hide();
						$("#content, #HeightHax p").css({'background':'rgba(27,138,102,0.3)'});
						$("#Side2").show();
						$("#Side2").children().show();
						return false;
}
function Side3()	{	$(this).scrollTop(300);
						$("#Side0,#Side1,#Side2,#Side4").hide();
						$("#content, #HeightHax p").css({'background':'rgba(208,97,40,0.3)'});
						$("#Side3").show();
						$("#Side3").children().show();
						return false;
}
function Side4()	{	$(this).scrollTop(300);
						$("#Side0,#Side1,#Side2,#Side3").hide();
						$("#content, #HeightHax p").css({'background':'rgba(246,35,102,0.3)'});
						$("#Side4").show();
						$("#Side4").children().show();
						return false;
}

/* -------------------------------------------------------------- Clear pages, open pages --------------------------------------------------------- */




/* -------------------------------------------------------------- Picture Slideshow Starts --------------------------------------------------------- */
/* -------------------------------------------------------------- Picture Slideshow 1 -------------------------------------------------------------- */
var slideIndex;
showSlides(slideIndex);

function plusSlides(n) 	 {	showSlides(slideIndex += n);}
function currentSlide(n) {	showSlides(slideIndex = n);	}

function showSlides(n)	 {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) 					{	slideIndex = 1						}
  if (n < 1) 								{	slideIndex = slides.length			}
	for (i = 0; i < slides.length; i++) 	{	slides[i].style.display = "none";  	}

	slides[slideIndex-1].style.display = "block";  			
}

/* -------------------------------------------------------------- Picture Slideshow 2 -------------------------------------------------------------- */
showSlides2(slideIndex);

function plusSlides2(n)  {	showSlides2(slideIndex += n);}
function currentSlide2(n){	showSlides2(slideIndex = n); }
function showSlides2(n)	 {
  var i;
  var slides = document.getElementsByClassName("mySlides2");

  if (n > slides.length) 					{	slideIndex = 1									}    
	if (n < 1) 								{	slideIndex = slides.length						}
		for (i = 0; i < slides.length; i++) {	slides[i].style.display = "none";  				}
												slides[slideIndex-1].style.display = "block";  	}
												
/* -------------------------------------------------------------- Picture Slideshow Ends ----------------------------------------------------------- */