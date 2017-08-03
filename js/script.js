(function($) {
// mulai script==============>
	"use strict";

//preload
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

	//Skroll
	 var s = skrollr.init();
	 //wow
	 new WOW().init();


	$(function(){
	    var windowH = $(window).height();
	    var wrapperH = $('.slide').height();
	    if(windowH > wrapperH) {
	        $('.slide').css({'height':($(window).height())+'px'});
	    }
	    $(window).resize(function(){
	        var windowH = $(window).height();
	        var wrapperH = $('.slide').height();
	        var differenceH = windowH - wrapperH;
	        var newH = wrapperH + differenceH;
	        var truecontentH = $('#truecontent').height();
	        if(windowH > truecontentH) {
	            $('.slide').css('height', (newH)+'px');
	        }

	    })
	});
// akhir script=========>
})(jQuery);
