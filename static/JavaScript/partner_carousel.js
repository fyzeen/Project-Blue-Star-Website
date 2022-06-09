$ (document).ready(function(){
    $('.partner_logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
        ]
    });
})