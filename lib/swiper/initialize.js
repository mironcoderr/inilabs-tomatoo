const swiper = new Swiper('.menuSwiper', {
    slidesPerView: 8,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})