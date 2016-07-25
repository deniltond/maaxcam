// Javascript Document

/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
$(window).load(function() {

    "use strict";

    // will first fade out the loading animation
    $(".signal").fadeOut();
        // will fade out the whole DIV that covers the website.
    $(".preloader").fadeOut("slow");

});

function trim(s){
  return ( s || '' ).replace( /^\s+|\s+$/g, '' );
}



$(function() {

    var $allVideos = $("iframe[src^='//monitore.maaxcam.com.br'],iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

});

/* =================================
   CAUROSEL
=================================== */
// $(document).ready(function() {
//     $(".mCustomScrollbar").mCustomScrollbar({axis:"x"});
// });

// $(document).ready(function(){
//      $("#mCustomScrollbar").carousel({
//          interval : 3000,
//          pause: false
//      });
// });

//scroll indicators
$(document).ready(function(){
	
//	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { alert('a'); e.stopPropagation(); });

	
//	$(".dropdown-menu a").click(function() {
//		alert('a');
//	    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
//	});

//	$('.in,.open').removeClass('in open');
	
//    $('.dropdown').click(function(e) {
////    	alert('a');
//    	e.preventDefault();
////        e.stopPropagation();
////        $('.dropdown-toggle').dropdown();
//    });
//    
//	$('li[class="dropdown open"]').removeClass('open');

	 
//	$('.dropdown').dropdown().on("hide.bs.dropdown", function(e) {
//		alert('a');
//        if ($.contains(dropdown, e.target)) {
//            e.preventDefault();
//        //or return false;
//        }
//    });

//	$('.dropdown-menu').on("click.bs.dropdown", function (e) {
//	$('.dropdown').click(function(e) {
//		alert('a');
////	    e.stopPropagation();
////	    e.preventDefault();    
//	    var target = $(e.target);
//	    var dropdown = target.closest('.dropdown');
//	    return !dropdown.hasClass('open') || !target.hasClass('keep-open');
//	});
	
//	$('#myDropdown').on('hide.bs.dropdown', function () {
//		e.stopPropagation();
//////    e.preventDefault();
//	    return false;
//	});
	
	$("#owl-demo").owlCarousel({
	    items : 4,
	    lazyLoad : true,
	    navigation : true,
//	    navigationText : false
	    navigationText : ["Anterior","Próximo"],
	    responsive: true,
	    responsiveRefreshRate: 200,
		responsiveBaseWidth: window
	  }); 

    // $('#button_left').click(function(){
    //     e.preventDefault();
    //     $("#thumb_indicators").scrollLeft(1);
    //     return false;
    // });
    $("#button_left").click(function(){
        $("#thumb_indicators").scrollLeft(1);
    });
    $("#button_right").click(function(){
        $("#thumb_indicators").scrollLeft(500);
    });

//    $("#assistir").click(function(){
//        // $("#thumb_indicators").scrollLeft(500);
//        $('#experimente').html('<iframe src="http://monitore.maaxcam.com.br/embed/37900/live/live/ponte-hercilio-luz?autoplay=true&sound=true" width="585px" height="390px" frameborder="0" allowfullscreen title="Ponte Hercílio Luz"></iframe>');
//    });



    var $allVideos = $("iframe[src^='//monitore.maaxcam.com.br'],iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();


});


//Caption - carousel
//
//$('.carousel').carousel();
//var caption = $('div.item:nth-child(1) .carousel-caption');
//$('#right h3').html(caption.html());
//
//str = trim(caption.text());
//str1 = trim('Ponte Hercílio Luz');
//// alert(str);
//// alert(str1);
//// alert(str.localeCompare(str1));
//if (str.localeCompare(str1) == 0){
//  $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_gelatoo.png'>");
//}
//else{
//  $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_anuncie.png'>");
//}
//// caption.css('display','none');
//$(".carousel").on('slide.bs.carousel', function(evt) {
//   var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .carousel-caption');
//   $('#right h3').html(caption.html());
//   $('#propaganda_slide').html(caption.html());
//
//
//
//  //  // This variable contains all kinds of data and methods related to the carousel
//  //    var carouselData = $(this).data('bs.carousel');
//  //    // EDIT: Doesn't work in Boostrap >= 3.2
//  //    //var currentIndex = carouselData.getActiveIndex();
//    //  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
//  //    var total = carouselData.$items.length;
//  //    alert(currentIndex);
//   //
//  //    // Create the text we want to display.
//  //    // We increment the index because humans don't count like machines
//  //    var text = (currentIndex + 1) + " of " + total;
//   //
//  //    // You have to create a HTML element <div id="carousel-index"></div>
//  //    // under your carousel to make this work
//  //    $('#carousel-index').text(text);
//
//  //  alert(caption.text());
//
//   str = trim(caption.text());
//   str1 = trim('Ponte Hercílio Luz');
//  //  alert(str);
//  //  alert(str1);
//  //  alert(str.localeCompare(str1));
//   if (str.localeCompare(str1) == 0){
//     $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_gelatoo.png'>");
//   }
//   else{
//     $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_anuncie.png'>");
//   }
//
//  //  if (caption.text()=='Ponte Hercílio Luz'){
//  //    $('#propaganda_slide').html("<img src='assets/images/publicidade_gelatoo.png'>");
//  //  }else{
//  //    $('#propaganda_slide').html("<img src='assets/images/publicidade_anuncie.png'>");
//  //  }
//  //  caption.css('display','none');
//});

$("textarea").keyup(function(e) {
    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
        $(this).height($(this).height()+1);
    };
});


/* =================================
   LOGIN-SIGNUP MODAL
=================================== */

function showRegisterForm(){
    "use strict";
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Create an Account');
        $('.modal-subtitle').html('Begin a 30-day free trial of SmartMVP');
    });
    $('.error').removeClass('alert alert-danger').html('');
}


function showLoginForm(){
    "use strict";
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });

        //$('.modal-title').html('Sign in to <span>SmartMvp</span>');
        //$('.modal-subtitle').html('Enter your email and password');
    });
    $('.error').removeClass('alert alert-danger').html('');
}


function openLoginModal(){
    "use strict";
    showLoginForm();
    $('#loginModal').modal('show');
}


function openRegisterModal(){
    "use strict";
    showRegisterForm();
    $('#loginModal').modal('show');
}


/* =================================
   SCROLL NAVBAR
=================================== */
$(window).scroll(function(){
    "use strict";
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("is-scrolling");
    } else {
        $(".navbar").removeClass("is-scrolling");
    }
});


/* =================================
   TYPING EFFECT
=================================== */
(function($) {

    "use strict";

    $('[data-typer-targets]').typer();
    $.typer.options.clearOnHighlight=false;

})(jQuery);


/* =================================
   DATA SPY FOR ACTIVE SECTION
=================================== */
(function($) {

    "use strict";

    $('body').attr('data-spy', 'scroll').attr('data-target', '.navbar-fixed-top').attr('data-offset', '11');

})(jQuery);


/* =================================
   HIDE MOBILE MENU AFTER CLICKING
=================================== */
(function($) {

    "use strict";

    $('.nav.navbar-nav li a ').click(function () {
//    	alert($(this).attr('id'));
    	if (($(this).attr('id') != "menusup") && ($(this).attr('id') != "menusup2")){
//    		alert($(this).attr('id'));
	        var $togglebtn = $(".navbar-toggle");
	        if (!($togglebtn.hasClass("collapsed")) && ($togglebtn.is(":visible"))){
	            $(".navbar-toggle").trigger("click");
	        }
    	}
    });

})(jQuery);


/* ==================================================== */
/* ==================================================== */
/* =======================================================
   DOCUMENT READY
======================================================= */
/* ==================================================== */
/* ==================================================== */


$('document').ready(function() {
//    $("#name").mask("99/99/9999");
    $(".maskFone").mask("(99) 9999-9999");
//    $(".maskFone").blur(function(event) {
//        if($(this).val().length == 15){
//          $('.maskFone').mask('(99) 99999-999?9');
//        } else {
//          $('.maskFone').mask('(99) 9999-9999?9');
//        }
//    });
});

$(document).ready(function() {


"use strict";


/* =====================================
    PARALLAX STELLAR WITH MOBILE FIXES
======================================== */
if (Modernizr.touch && ($('.header').attr('data-stellar-background-ratio') !== undefined)) {
    $('.header').css('background-attachment', 'scroll');
    $('.header').removeAttr('data-stellar-background-ratio');
} else {
    $(window).stellar({
        horizontalScrolling: false
    });
}




/* =================================
    WOW ANIMATIONS
=================================== */
new WOW().init();


/* =================================
    VIDEO BACKGROUND
=================================== */
//$("#top").vide("assets/images/video/ocean", {
//    posterType: "jpg"
//});


/* =================================
    YOUTUBE VIDEO BACKGROUND
=================================== */
//$(function(){
//    $(".player").YTPlayer();
//});


/* ==========================================
    EASY TABS
============================================= */
$('.tabs.testimonials').easytabs({
    animationSpeed: 300,
    updateHash: false,
    cycle: 10000
});

$('.tabs.features').easytabs({
    animationSpeed: 300,
    updateHash: false
});



/* ==========================================
   OWL CAROUSEL
============================================= */
/* App Screenshot Carousel in Mobile-Download Section */
$("#owl-carousel-shots-phone").owlCarousel({
    singleItem:true,navigation: true,
    navigationText: [
        "<i class='icon arrow_carrot-left'></i>",
        "<i class='icon arrow_carrot-right'></i>"
                    ],
    addClassActive : true,
    itemsDesktop : [1200, 1],
    itemsDesktopSmall : [960, 1],
    itemsTablet : [769, 1],
    itemsMobile : [700, 1],
    responsiveBaseWidth : ".shot-container",
    items : 1,
    slideSpeed : 1000,
    mouseDrag : true,
    responsiveRefreshRate : 200,
    autoPlay: 5000
});

/* ==========================================
    VENOBOX - LIGHTBOX FOR GALLERY AND VIDEOS
============================================= */
$('.venobox').venobox();

/* ===================================================================
    TWEETIE -  TWITTER FEED PLUGIN THAT WORKS WITH NEW Twitter 1.1 API
==================================================================== */
//$('.tweet').twittie({
//    apiPath : 'assets/js/plugins/twitter/api/tweet.php',
//    count: 2,
//    template: '{{tweet}} - <span class="date">{{date}}</span>'
//});


/* =================================
   SCROLL TO
=================================== */
var onMobile;

onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

if (onMobile === true) {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 0}});
    event.preventDefault();
});
} else {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 1500}});
        event.preventDefault();
});
}


/* ==========================================
   MAILCHIMP NEWSLETTER SUBSCRIPTION
============================================= */
$(".mailchimp-subscribe").ajaxChimp({
    callback: mailchimpCallback,
    url: "http://themedept.us9.list-manage.com/subscribe/post?u=63465a86fdd5f3b9fa31f9278&amp;id=52df53337f" // Replace your mailchimp post url inside double quote "".
});

function mailchimpCallback(resp) {
if(resp.result === 'success') {
    $('.mc-success')
    .html('<i class="icon icon_check_alt2"></i>' + resp.msg)
    .fadeIn(1000);

    $('.mc-failed').fadeOut(500);

} else if(resp.result === 'error') {
    $('.mc-failed')
    .html('<i class="icon icon_close_alt2"></i>' + resp.msg)
    .fadeIn(1000);

    $('.mc-success').fadeOut(500);
}
}

/* ==========================================
   FUNCTION FOR EMAIL ADDRESS VALIDATION
============================================= */
function isValidEmail(emailAddress) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

}

/* ==========================================
   LOCAL NEWSLETTER
============================================= */
$("#newsletter_form").submit(function(e) {
	e.preventDefault();
    var data = {
        email: $("#newsletter_email").val()
    };
   
    if ( isValidEmail(data['email'])) {
//    	alert($("#newsletter_email").val());
        $.ajax({
            type: "POST",
            url: "/newsletter_form/",
            data: data,
            success: function() {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-failed').fadeOut(500);
            }
        });
    } else {
    	 $('.subscription-failed').fadeIn(1000);
         $('.subscription-success').fadeOut(500);
    }


    return false;
});

/* ============================
   LOGIN-MODAL VALIDATION.
=============================== */
$("#login-modal").submit(function(e) {
    e.preventDefault();
    var data = {
        password: $("#lm-password").val(),
        email: $("#lm-email").val()
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1) ) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.lm-success').fadeIn(1000);
                $('.lm-failed').fadeOut(500);
            }
        });
    } else {
        $('.lm-failed').fadeIn(1000);
        $('.lm-success').fadeOut(500);
    }

    return false;
});


/* ===========================================
   SIGNUP-MODAL VALIDATION. WITH CONFIRM PSW.
============================================== */
$("#signup-modal").submit(function(e) {
    e.preventDefault();
    var data = {
        password: $("#sm-password").val(),
        email: $("#sm-email").val(),
        pswconfirm: $("#sm-confirm").val()
    };

    if ( isValidEmail(data['email']) && (data['password'].length > 1) && (data['password'].match(data['pswconfirm'])) ) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.sm-success').fadeIn(1000);
                $('.sm-failed').fadeOut(500);
            }
        });
    } else {
        $('.sm-failed').fadeIn(1000);
        $('.sm-success').fadeOut(500);
    }

    return false;
});





/* ================================================
   SIGNUP-DIVIDER VALIDATION. WITHOUT CONFIRM PSW.
=================================================== */
$("#experimente_form").submit(function(e) {
    e.preventDefault();
    var data = {
    	nome: $("#experimente-nome").val(),
    	telefone: $("#experimente-telefone").val(),
        email: $("#experimente-email").val(),
        cidade: $("#experimente-cidade").val(),
    };
    
    if (data['nome'].length < 1){
    	$('.signup-failed').html('Informe seu nome');
    	$('.signup-failed').fadeIn(1000);
    	return false;
    }
    if (data['telefone'].length < 1){
    	$('.signup-failed').html('Informe seu telefone');
    	$('.signup-failed').fadeIn(1000);
    	return false;
    }
    if (data['email'].length < 1){
    	$('.signup-failed').html('Informe seu email');
    	$('.signup-failed').fadeIn(1000);
    	return false;
    }
    if (data['cidade'].length < 1){
    	$('.signup-failed').html('Informe sua cidade');
    	$('.signup-failed').fadeIn(1000);
    	return false;
    }
    
//    && (data['password'].length > 1
    if ( isValidEmail(data['email'])) {
		$('#experimente').html('<iframe src="http://monitore.maaxcam.com.br/embed/37900/live/live/ponte-hercilio-luz?autoplay=true&sound=true" width="585px" height="390px" frameborder="0" allowfullscreen title="Ponte Hercílio Luz"></iframe>');
	    if ( isValidEmail(data['email'])) {
	        $.ajax({
	            type: "POST",
	            url: "/experimente_form/",
	            data: data,
	            success: function() {
	                $('.signup-success').fadeIn(1000);
	                $('.signup-failed').fadeOut(500);
	            }
	        });
	    } else {
	        $('.sm-failed').fadeIn(1000);
	        $('.sm-success').fadeOut(500);
	    }
		
        
    } else {
    	$('.signup-failed').html('Verifique seu email.');
        $('.signup-failed').fadeIn(1000);
        $('.signup-success').fadeOut(500);
    }

    return false;
});

/* ===================================================
   FAST-REGISTRATION VALIDATION. WITHOUT CONFIRM PSW.
====================================================== */
$("#contact_form").submit(function(e) {
    e.preventDefault();
    var data = {
    	interesse: $("#input_interesse").val(),
        nome: $("#input_nome").val(),
        email: $("#input_email").val(),
        telefone: $("#input_telefone").val(),
        bairro: $("#input_bairro").val(),
        cidade: $("#input_cidade").val(),
        msg: $("#input_msg").val(),
        
    };

    if ( isValidEmail(data['email']) && (data['nome'].length > 1) && (data['interesse'] != 0)) {
        $.ajax({
            type: "POST",
            url: "/contato_form/",
            data: data,
            success: function() {
//            	alert('sucess')
                $('.sm-success').fadeIn(1000);
                $('.sm-failed').fadeOut(500);
            }
        });
//        $('.sm-success').fadeIn(1000);
//        $('.sm-failed').fadeOut(500);
    } else {
        $('.sm-failed').fadeIn(1000);
        $('.sm-success').fadeOut(500);
    }

    return false;
});


/* =======================================================================
   SIGNUP-DIVIDER ANIMATED POLYGON BACKGROUND
========================================================================== */
    var container = document.getElementById('canvas-bg');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('323A45', '323A45');
    var geometry = new FSS.Plane(2000, 1000, 15, 8);
    var material = new FSS.Material('FFFFFF', 'FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();

/* ===========================================================
   BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8
============================================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
            )
        );
    document.querySelector('head').appendChild(msViewportStyle);
}


});
