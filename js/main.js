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
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
});

//swiper comment
var menu = [1, 2, 3, 4, 5]
var swiperComment = new Swiper('#sectionComment', {
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
        dynamicBullets: true,
        el: '.swiper-pagination',
        clickable: true,
        // type : 'custom',
        // bulletClass:'swiper-pagination-img',
        renderBullet: function (index, className) {
            return '<img  src="images/swipericon'+(menu[index])+'.png" alt="" class="swiper-pagination-img ' + className+'">'
        },
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