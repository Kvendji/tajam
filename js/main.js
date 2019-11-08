//header sticky-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 30) { //
            $("#header").addClass("stickytop");
        } else {
            $("#header").removeClass("stickytop");
        }
    });
});


//swiper-banner
var swiperBanner = new Swiper('#bannerSwiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    grabCursor: true,
});

//swiper comment
var swiperComment = new Swiper('.swiper-container', {
    slidesPerView:1 ,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type : 'custom',
        bulletClass:'.swiper_pagination_img'
    },
    grabCursor: true,
});


function resize_img_project_elements() {
    // let container = $("#galleryProject");
    var containerWidth = $('body').innerWidth();
    let size = parseInt( containerWidth / 6);
    let img_project_elements = $(".img-project");

    for (var i = 0; i < img_project_elements.length; i++) {
        img_project_elements[i].style.width = `${size}px`;
        img_project_elements[i].style.height = `${size}px`;
    }

}

$(window).on('resize', function (event) {
    console.log(event);
    resize_img_project_elements()
});

$(document).ready(resize_img_project_elements());