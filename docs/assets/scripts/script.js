document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-hero', {
        direction: 'horizontal',
        loop: false,
        allowTouchMove: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});
