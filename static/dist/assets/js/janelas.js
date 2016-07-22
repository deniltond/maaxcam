$(function(){
//Revolution Slider
  if ($('.tp-banner').length) {
  var revolutionSlider = $('.tp-banner');
  
  if (revolutionSlider.closest('.rs-slider').hasClass('full-width')) {
    var body         = $('body'),
      width        = body.width(),
      topHeight    = 0,
      headerHeight = 104,
      height;
      
    if ($('#top-box').length) {
    if (body.hasClass('hidden-top')) {
      topHeight = $('#top-box').outerHeight() - 32;
    }
    }
    
    if ((body.width() + scrollWidth) >= 1200) {
    height = body.height() - (topHeight + headerHeight);
    } else {
    height = 800;
    }
    
    revolutionSlider.revolution({
    delay             : 6000,
    startwidth        : 1200,
    startheight       : height,
    hideThumbs        : 10,
    navigationType    : 'bullet',
    navigationArrows  : 'solo',
    navigationHAlign  : 'center',
        navigationVAlign  : 'top',
        navigationHOffset : -545,
        navigationVOffset : 30,
    hideTimerBar      : 'on'
    }).parents('.slider').removeClass('load');
  } else {
    revolutionSlider.revolution({
    delay          : 6000,
    startwidth     : 1200,
    startheight    : 500,
    hideThumbs     : 10,
    navigationType : 'none',
    onHoverStop    : 'off'
    }).parents('.slider').removeClass('load');
  }
  }

var makeFullLink = function() {
  console.log("make full link");
  $('.cameras .camera').each(function(index,element){
    $(element).on('click',function(e){ e.preventDefault(); window.location = $('a',element)[0].href; });
  });
}

$('.cameras').slick({
  dots: false,
  infinite: true,
  speed: 300,
//  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  onAfterChange : makeFullLink,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
makeFullLink();
$(window).resize(makeFullLink);
  });
