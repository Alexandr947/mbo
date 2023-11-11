$('.burger').click(function(){
    
    $('.burger').toggleClass("active");
    $('.header_menu').toggleClass("active");
});



$('.header_menu_item').click(function(){
    if( $('.burger').hasClass("active")){
       $(this).toggleClass("open"); 
    }  
});


new Swiper('.swiper', {
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


