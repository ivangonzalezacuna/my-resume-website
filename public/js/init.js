/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
      e.preventDefault();

	   var target = this.hash,
	   $target = $(target);

	   $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
         window.location.hash = target;
      });
	});

/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({
      handler: function(event, direction) {
		   var active_section;
         active_section = $(this);
         if (direction === "up") active_section = active_section.prev();
         
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
         active_link.parent().addClass("current");
		},
		offset: '35%'
	});

/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {
		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }
	});

/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({
       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });

/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').on("click", function() {
      $('#image-loader').fadeIn();
      $('#message-missing-name').fadeOut();
      $('#message-missing-email').fadeOut();
      $('#message-missing-message').fadeOut();
      $('#message-warning').fadeOut();

      var contactName = $('#contactForm #contactName').val();
      if (contactName === "") {
         $('#image-loader').fadeOut();
         $('#message-missing-name').fadeIn();
         $('#message-warning').fadeIn();
         return false;
      }

      var contactEmail = $('#contactForm #contactEmail').val();
      if (contactEmail === "") {
         $('#image-loader').fadeOut();
         $('#message-missing-email').fadeIn();
         $('#message-warning').fadeIn();
         return false;
      }

      var contactSubject = $('#contactForm #contactSubject').val();

      var contactMessage = $('#contactForm #contactMessage').val();
      if (contactMessage === "") {
         $('#image-loader').fadeOut();
         $('#message-missing-message').fadeIn();
         $('#message-warning').fadeIn();
         return false;
      }

      var params = {
         "name": contactName,
         "email": contactEmail,
         "subject": contactSubject,
         "message": contactMessage,
      };

      $.ajax({
	      type: "POST",
         url: "https://script.google.com/macros/s/AKfycbyq8tGvTbLVgvG7VXkYfuRcMZ0ASZlJrQIFiyp-U2CqI_VrvOg/exec",
         data: params,
         dataType: "json",
         error: function() {
            $('#image-loader').fadeOut();
            $('#message-warning').fadeIn();
         },
	      success: function(msg) {
            console.log(msg.result)
            if (msg.result === "success") {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
            } else {
               $('#image-loader').fadeOut();
               $('#message-warning').fadeIn();
            }
	      }
      });
      return false;
   });
});