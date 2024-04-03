$(document).ready(function() {
    $('.slick-tour').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        loop:true,
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        // prevArrow:`<button type='button' class='slick-prev pull-left pull-customArrows'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right pull-customArrows'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`,
    });  
})

$(document).ready(function() {
    $('.guides-layout').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        speed:1500,
        // prevArrow:`<button type='button' class='slick-prev pull-left pull-customArrows'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
        // nextArrow:`<button type='button' class='slick-next pull-right pull-customArrows'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`
    });  
})

$(document).ready(function() {
    $('.slick-tour-gallery').slick({
        // cssEase: 'linear',
        infinite: true,
        autoplay:false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed:1500,
        // prevArrow:`<button type='button' class='slick-prev pull-left pull-customArrows'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
        // nextArrow:`<button type='button' class='slick-next pull-right pull-customArrows'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    dots: true
                }
            }
        ]
    });  
})