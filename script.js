let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});