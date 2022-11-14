const bannerSwiper = new Swiper(".banner-swiper", {
    speed: 1000,
    slidesPerView: 1,
    loop: true,  
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".banner-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".banner-swiper-button-next",
        prevEl: ".banner-swiper-button-prev",
    },
})


const menuSwiper = new Swiper(".menu-swiper", {
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        550: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 8,
            spaceBetween: 20,
        }
    }
})