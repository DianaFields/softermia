
var animationLoad;
function init() {
	animationLoad = setTimeout(showPage, 2500);
}
function showPage() {
	document.getElementById("load").style.display = "none";
	document.getElementById("main-content").style.opacity = "1";
}

function loadEx(){
	$("#header").load("sections/nav.html"); 
	$("#footer").load("sections/footer.html"); 
}
function loadInter(){
	$("#header").load("../sections/nav.html"); 
	$("#footer").load("../sections/footer.html"); 
}

function animateScroll(){

	(function($) {
		"use strict";
		$('a.page-scroll').bind('click', function(event) {
			alert();
			var $ele = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($ele.attr('href')).offset().top - 60)
			}, 1450, 'easeInOutExpo');
			event.preventDefault();
		});
	})(jQuery);
}


function pgdAnimation(){
	
	$( ".mk-01" ).mouseover(function() {
		$(".mk-01-open").css("opacity","1");
	});
	$( ".mk-02" ).mouseover(function() {
		$(".mk-02-open").css("opacity","1");
	});
	$( ".mk-03" ).mouseover(function() {
		$(".mk-03-open").css("opacity","1");
	});
	
	$( ".mk-01" ).mouseleave(function() {
		$(".mk-01-open").css("opacity","0");
	});
	$( ".mk-02" ).mouseleave(function() {
		$(".mk-02-open").css("opacity","0");
	});
	$( ".mk-03" ).mouseleave(function() {
		$(".mk-03-open").css("opacity","0");
	});

}

function backToTop(){
	var pxScrolled = 1000;
	var duration = 500;
	$(window).scroll(function() {

		if ($(this).scrollTop() > pxScrolled) {
			$('.backtop').css({'opacity': '1', 'transition': '.6s'});
		} else {
			$('.backtop').css({'opacity': '0'});
		} 
	});

	$('.backtop').click(function() {
		$('body').animate({scrollTop: 0}, duration);
	})
}

var change = true;
// Functions for desktop only
function deskOnly(){
	var mediaquery = window.matchMedia("(min-width: 769px)");
	if (mediaquery.matches) {
		// MENU ANIMATED
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('nav').addClass("nav-collapse");

			} else {
				$('nav').removeClass("nav-collapse");
			} 
		});

		$('.backtop').click(function() {
			$('body').animate({scrollTop: 0}, duration);
		})
		var flip = 0;
		$( "#prod" ).mouseover(function() {
			$(".products").css("display","block");
		});
		$( ".products" ).mouseleave(function() {
			$(".products").css("display","none");
		});

// PGD ANIMATION DESKTOP
$(window).scroll(function(){
	var firstScreen = $("#firstScreen").offset().top;
	var secondScreen = $("#secondScreen").offset().top;
	var thirdScreen = $("#thirdScreen").offset().top;
	var fourScreen = $("#fourScreen").offset().top;
	var lastScreen = $("#lastScreen").offset().top;
	var scrollTop = $(window).scrollTop();
	if(scrollTop > firstScreen){
		$('.pgd').css('position','fixed');
		$('.screen-01').css('position','fixed');
		$('.pgd').css('top','10em');
	}
	if(scrollTop < firstScreen){
		$('.pgd').css('top','0');
		$('.pgd').css('position','inherit');
		$('.screen-01').css('position','inherit');


	}
	if(scrollTop > secondScreen){
		$('.screen-01').css('opacity','1');
		$('.screen-02').css('opacity','0');
		$('.screen-03').css('opacity','0');

	}
	if(scrollTop > thirdScreen) {
		$('.screen-02').css('opacity','1');
		$('.screen-01').css('opacity','0');
	}
	if(scrollTop > fourScreen){
		$('.screen-02').css('opacity','0');
		$('.screen-01').css('opacity','0');
		$('.screen-03').css('opacity','1');
	}
	if(scrollTop > lastScreen){
		$('.pgd').css('position','inherit');
		$('.screen-03').css('position','inherit');
		$('.pgd').css('margin-top','140em');
		$('.screen-03').css('opacity','0');
	}
	if(scrollTop < lastScreen & scrollTop > firstScreen){
		$('.pgd').css('position','fixed');
		$('.screen-01').css('position','fixed');
		$('.pgd').css('margin-top','0');
	}
});

} else {
  // PGD ANIMATION MOBILE
  $(window).scroll(function(){
  	var firstScreen = $("#firstScreen").offset().top;
  	var secondScreen = $("#secondScreen").offset().top;
  	var thirdScreen = $("#thirdScreen").offset().top;
  	var fourScreen = $("#fourScreen").offset().top;
  	var lastScreen = $("#lastScreen").offset().top;
  	var scrollTop = $(window).scrollTop();
  	if(scrollTop > firstScreen){
  		$('.pgd').css('position','fixed');
  		$('.screen-01').css('position','fixed');
  		$('.pgd').css('top','7em');
  	}
  	if(scrollTop < firstScreen){
  		$('.pgd').css('top','0');
  		$('.pgd').css('position','inherit');
  		$('.screen-01').css('position','inherit');


  	}
  	if(scrollTop > secondScreen){
  		$('.screen-01').css('opacity','1');
  		$('.screen-02').css('opacity','0');
  		$('.screen-03').css('opacity','0');

  	}
  	if(scrollTop > thirdScreen) {
  		$('.screen-02').css('opacity','1');
  		$('.screen-01').css('opacity','0');
  	}
  	if(scrollTop > fourScreen){
  		$('.screen-02').css('opacity','0');
  		$('.screen-01').css('opacity','0');
  		$('.screen-03').css('opacity','1');
  	}
  	if(scrollTop > lastScreen){
  		$('.pgd').css('position','inherit');
  		$('.screen-03').css('position','inherit');
  		$('.pgd').css('margin-top','102em');
  		$('.screen-03').css('opacity','0');
  	}
  	if(scrollTop < lastScreen & scrollTop > firstScreen){
  		$('.pgd').css('position','fixed');
  		$('.screen-01').css('position','fixed');
  		$('.pgd').css('margin-top','0');
  	}
  });
}

}




