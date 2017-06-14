
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


var change = true;
function pgdAnimation(){
	$(window).scroll(function(){
		var firstScreen = $("#firstScreen").offset().top;
		var secondScreen = $("#secondScreen").offset().top;
		var thirdScreen = $("#thirdScreen").offset().top;
		var lastScreen = $("#lastScreen").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > firstScreen){
			$('.pgd').css('position','fixed');
			// $('.pgd').css('top','6em');
		}
		if(scrollTop < firstScreen){
			$('.pgd').css('top','0');
			$('.pgd').css('position','inherit');
			
		}
		if(scrollTop > secondScreen){
			$('.screen-01').css('opacity','1');
			$('.screen-02').css('opacity','0');
		}
		if(scrollTop < secondScreen){
			$('.screen-01').css('opacity','0');
		}
		if(scrollTop > thirdScreen){
			$('.screen-02').css('opacity','1');
			$('.screen-01').css('opacity','0');
		}
		if(scrollTop > lastScreen){
			$('.pgd').css('position','inherit');
			$('.pgd').css('margin-top','155em');
			$('.screen-02').css('opacity','0');
		}
		if(scrollTop < lastScreen & scrollTop > firstScreen){
			$('.pgd').css('position','fixed');
			$('.pgd').css('margin-top','0');
		}
	});
	 
}


