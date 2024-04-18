var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});