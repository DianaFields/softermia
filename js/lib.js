var change = true;
// Functions for desktop only
function deskOnly(){
	var mediaquery = window.matchMedia("(min-width: 769px)");
	if (mediaquery.matches) {
	// MENU ANIMATED
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('nav').addClass("nav-collapse");
			$('.imagotipo').css("opacity","1");
			$('.logo-head').css("opacity","0");
			$('.item').css("padding-top","1em");

		} else {
			$('nav').removeClass("nav-collapse");
			$('.logo-head').css("opacity","1");
			$('.imagotipo').css("opacity","0");
			$('.item').css("padding-top","2em");
		} 
	});

	$('.backtop').click(function() {
		$('body').animate({scrollTop: 0}, duration);
	})
	var flip = 0;
	// $( "#prod" ).mouseover(function() {
	// 	$(".products").css("display","block");
	// });
	// $( ".products" ).mouseleave(function() {
	// 	$(".products").css("display","none");
	// });


} else {
// PGD ANIMATION MOBILE


// menu
	// MENU ANIMATED
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('nav').addClass("nav-collapse");
			$('nav').removeClass("nav-expand");
			$('.imagotipo').css("width","30px");
			$('.dropdown-toggle').removeClass("dropdown-expand");
			$('.dropdown-toggle').addClass("dropdown-collapse");
			$('.logo-head').css("display","none");
			$('.item').css("padding-top","1em");

		} else {
			$('nav').removeClass("nav-collapse");
			$('nav').addClass("nav-expand");
			$('.logo-head').css("display","inline-block");
			$('.imagotipo').css("width","0");
			$('.item').css("padding-top","2em");
			$('.dropdown-toggle').removeClass("dropdown-collapse");
			$('.dropdown-toggle').addClass("dropdown-expand");
		} 
	});


}

}
var animationLoad;
function init() {
	animationLoad = setTimeout(showPage, 700);
}
function showPage() {
	document.getElementById("load").style.display = "none";
	document.getElementById("main-content").style.opacity = "1";
}

function loadEx(){
	$("#footer").load("sections/footer.html"); 
}
function loadInter(){
	$("#headerSections").load("../sections/nav.html"); 
	$("#footer").load("../sections/footer.html"); 
}

function animateMenu(){
	(function($) {
		"use strict";
		$('.page-scroll').bind('click', function(event) {
			var $ele = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($ele.attr('href')).offset().top - 60)
			}, 1450, 'easeInOutExpo');
			event.preventDefault();
		});
	})(jQuery);
}

function mkAnimation(){
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
function count(){
	$.fn.counter = function(options) {
		var settings = $.extend({
			start: 0,
			end: 100,
			easing: 'swing',
			duration: 1000,
			complete: '',
		}, options);

		var thisElement = $(this);

		$({
			count: settings.start
		}).animate({
			count: settings.end
		}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};
	$('#score-counter').counter({
		start: 0,
		end: 67,
		duration: 2000,
	});
	$('.score-graph').each(function() {
		$(this).find('.score-graph-bar').animate({
			width: $(this).attr('data-percent')
		}, 4000);
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



function pgd(){
// PGD ANIMATION DESKTOP
var mediaquery = window.matchMedia("(min-width: 769px)");
if (mediaquery.matches) {
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
	// $('#pgd-main').css('height','100%');
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
	$('.pgd').css('margin-top','185em');
	$('.screen-03').css('opacity','0');
	// $('#pgd-main').css('height','800px');
}
if(scrollTop < lastScreen & scrollTop > firstScreen){
	$('.pgd').css('position','fixed');
	$('.screen-01').css('position','fixed');
	$('.pgd').css('margin-top','0');
	
}
});
}
else{
	$(window).scroll(function(){
	var firstScreen = $("#firstScreen").offset().top;
	var secondScreen = $("#secondScreen").offset().top;
	var thirdScreen = $("#thirdScreen").offset().top;
	var fourScreen = $("#fourScreen").offset().top;
	var lastScreen = $("#lastScreen").offset().top;
	var scrollTop = $(window).scrollTop();
	if(scrollTop > firstScreen){
		// $('.pgd').css('position','fixed');
		$('.pgd').addClass('init-pgd');
		$('.screen-01').css('position','fixed');
		// $('.pgd').css('top','7em');
	}
	if(scrollTop < firstScreen){
		// $('.pgd').css('top','0');
		$('.pgd').css('position','inherit');
		$('.pgd').removeClass('init-pgd');
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
		$('.pgd').removeClass('init-pgd');
		$('.pgd').addClass('return-pgd');

		$('.pgd').css('position','inherit');
		$('.screen-03').css('position','inherit');
		// $('.pgd').css('margin-top','80em');
		$('.screen-03').css('opacity','0');
	}
	if(scrollTop < lastScreen & scrollTop > firstScreen){
		$('.pgd').removeClass('return-pgd');
		$('.pgd').css('position','fixed');
		$('.screen-01').css('position','fixed');
		// $('.pgd').css('margin-top','0');
	}
});
}
}

function loadImages(){

}




