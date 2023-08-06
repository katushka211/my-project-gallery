import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const swiperMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 3.5,
        spaceBetween: 60,
      },
    },
  });
});
