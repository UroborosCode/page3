$(function () {
    $('.first-block__slider-i').slick({
        dots: false,
        arrows: false,
        fade: false,
        autoplay: false,
        slidesToScroll: 1,
        
    });
    $('.first-block__slider-inf').slick({
        dots: false,
        arrows: true,
        fade: false,
        autoplay: false,
        slidesToScroll: 1,
        infinite: false,
    });
    $('.benefits__slider-box').slick({
        dots: false,
        arrows: true,
        fade: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  dots: false,
                  arrows: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  dots: false,
                  arrows: true
                }
              },
        ],
    });
    var mixer = mixitup( ".category__product-box" ,{
        load: {
            filter: '.furn',
            
        },
        animation: {
            // effects: 'fade translateZ(-100px)'
        }

    });
})