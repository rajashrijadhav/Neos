jQuery(document).ready(function(){
    jQuery('.rj-slider').slick({
        // accessibility: false,
       
        //appendArrows: '.header',
        //prevArrow: '.button-prev',
       // nextArrow: '.button-next',
       autoplay:true,
       dots: false,
       arrows: true,
       prevArrow: '.button-prev',
        nextArrow: '.button-next',
       infinite: true,
       speed: 300,
       fade: true,
       cssEase: 'linear',
    });

    jQuery('.product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
       prevArrow: '.button-prev',
        nextArrow: '.button-next',
        dots:true,
      });

      jQuery('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.button-prev',
        nextArrow: '.button-next',
        dots: true,
    });
});