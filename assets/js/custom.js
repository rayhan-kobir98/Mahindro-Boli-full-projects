(function($) {
    "use strict";
    $(document).on('ready', function() {

        //isotope activation js codes:
        jQuery(window).on("load",function(){

            $(".portfolio-grid").isotope({
                filter:"*",
                animationOptions :{
                    duration:1000
                },
                        itemSelector: '.portfolio-grid-item',
                        hiddenStyle: {
                            opacity: 0,
                            transform: 'scale(.4)rotate(60deg)',
                        },
                        visibleStyle: {
                            opacity: 1,
                            transform: 'scale(1)rotate(0deg)',
                        },
                        stagger: 0,
                        transitionDuration: '0.6s'
            });

            $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth:0
                }
            });

            $("#filters ul li").on('click',function(){
                $("#filters ul li").removeClass("branding").filter(this).addClass("branding");
                var filter_id = $(this).data('filter');
                $(".portfolio-grid").isotope({
                    itemSelector: '.portfolio-grid-item',
                    filter:filter_id,
                    animationOptions :{
                        duration:1000
                    }
                });
            });

            // change is-checked class on buttons
            $('#filters ul').each( function( i, liList ) {
                var $liList = $( liList );
                $liList.on( 'click', 'li ', function() {
                    $liList.find('.active').removeClass('active');
                    $( this ).addClass('active');
                });
            });
        });

        //counterup count jquery
        jQuery(function(){
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

        jQuery(window).load(function() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: false,
                prevButton: false,
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        });

        $('.carousel').carousel({
            interval: 5000
        });

        //menu top fixed
        var fixed_top = $(".header-wrapper");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 50) {
                $('body').addClass("body-padding");
                fixed_top.addClass("menu-fixed animated fadeInDown");

            } else {
                $('body').removeClass("body-padding");
                fixed_top.removeClass("menu-fixed animated fadeInDown");
            }

        });

        

        // nav design
         $(document).ready(function(){
             $(window).scroll(function () {
                 if ($(this).scrollTop() > 50) {
                     $('#back-to-top').fadeIn();
                 } else {
                     $('#back-to-top').fadeOut();
                 }
             });
             // scroll body to 0px on click
             $('#back-to-top').click(function () {
                 $('#back-to-top').tooltip('hide');
                 $('body,html').animate({
                     scrollTop: 0
                 }, 900);
                 return false;
             });

             $('#back-to-top').tooltip('show');

         });
        
        
        
        

        // change is-checked class on buttons
        $(document).load(function() {
            $('.navbar-collapse ul').each(function (i, liList) {
                var $liList = $(liList);
                $liList.on('click', 'li ', function () {
                    $liList.find('.menu-active').removeClass('menu-active');
                    $(this).addClass('menu-active');
                });

            });
        });

         //jQuery for page scrolling feature - requires jQuery Easing plugin
		$('ul.nav').each( function( i, liList ) {
		  var $liList = $( liList );
		  $liList.on( 'click', 'li a', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		  });
		});


    });
})($);
