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

