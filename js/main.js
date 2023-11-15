$('.burger').click(function(){
    
    $('.burger').toggleClass("active");
    $('.header_menu').toggleClass("active");
});



$('.header_menu_item').click(function(){
    if( $('.burger').hasClass("active")){
       $(this).toggleClass("open"); 
    }  
});


new Swiper('.first_slider_swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.first_slider-swiper-button-next',
      prevEl: '.first_slider-swiper-button-prev',
    },
    
    autoplay: {
      delay: 4000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
    


});

new Swiper('.toptrand_swiper',{
  slidesPerView : 2,
  spaceBetween : 10,
  loop : true,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4
    },
    
    1250: {
      spaceBetween: 20,
      slidesPerView: 4
    }
  },
      // Navigation arrows
  navigation: {
    nextEl: '.toptrand-swiper-button-next',
    prevEl: '.toptrand-swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },

  pagination: {
      el: '.toptrand-pagination',
      type: 'bullets',
  }

});




new Swiper('.topvibro_swiper',{
  slidesPerView : 2,
  spaceBetween : 10,
  loop : true,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4
    },
    
    1250: {
      spaceBetween: 20,
      slidesPerView: 4
    }
  },
      // Navigation arrows
  navigation: {
    nextEl: '.topvibro-swiper-button-next',
    prevEl: '.topvibro-swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },

  pagination: {
      el: '.topvibro-pagination',
      type: 'bullets',
  }

});


new Swiper('.topdong_swiper',{
  slidesPerView : 2,
  spaceBetween : 10,
  loop : true,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4
    },
    
    1250: {
      spaceBetween: 20,
      slidesPerView: 4
    }
  },
      // Navigation arrows
  navigation: {
    nextEl: '.topdong-swiper-button-next',
    prevEl: '.topdong-swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },

  pagination: {
      el: '.topdong-pagination',
      type: 'bullets',
  }

});

new Swiper('.brandshop_swiper',{
  slidesPerView : 2,
  spaceBetween : 10,
  loop : true,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4
    },
    
    1250: {
      spaceBetween: 20,
      slidesPerView: 4
    }
  },
      // Navigation arrows
  navigation: {
    nextEl: '.brandshop-swiper-button-next',
    prevEl: '.brandshop-swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },

  pagination: {
      el: '.brandshop-pagination',
      type: 'bullets',
  }

});


new Swiper('.single_swiper',{
  slidesPerView : 1

,
      // Navigation arrows
  navigation: {
    nextEl: '.single_swiper-button-next',
    prevEl: '.single_swiper-button-prev',
  },
  slideToClickedSlide : true,
  //autoplay: {delay: 4000},
  thumbs:{
    swiper:{
      el:'.mini_single_swiper',
      spaceBetween: 25,
      slidesPerView: 4,
      slideToClickedSlide : true,
      mousewheel: {
        releaseOnEdges: true,
      },
      navigation: {
        nextEl: '.mini_single_swiper-button-next',
        prevEl: '.mini_single_swiper-button-prev',
      }

    }


  }



});




//==============TABS==============================//

$('#tab-title-description').click(function(){
  $('#tab-description').css("display" , "block");
  $('#tab-additional_information').css("display" , "none");
  $('#tab-reviews').css("display" , "none");

  
  $('.info_panel_tabs > li').toggleClass('active_tab', false);
  $(this).toggleClass('active_tab');
  

})


$('#tab-title-additional_information').click(function(){
  $('#tab-description').css("display" , "none");
  $('#tab-additional_information').css("display" , "block");
  $('#tab-reviews').css("display" , "none");

  $('.info_panel_tabs > li').toggleClass('active_tab', false);
  $(this).toggleClass('active_tab');



})

$('#tab-title-reviews').click(function(){
  $('#tab-description').css("display" , "none");
  $('#tab-reviews').css("display" , "block");
  $('#tab-additional_information').css("display" , "none");
  

  $('.info_panel_tabs > li').toggleClass('active_tab', false);
  $(this).toggleClass('active_tab');



})


//================Filters======================

$('.sidebar_off').click(function(){

  $('.sidebar_filter_wrap').hide(1000);
  $('.sidebar_off').hide();
  $('.sidebar_on').show();



});
$('.sidebar_on').click(function(){

  $('.sidebar_filter_wrap').show(1000);
  $('.sidebar_off').show();
  $('.sidebar_on').hide();
  

});