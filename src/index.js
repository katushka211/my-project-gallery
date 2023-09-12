import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.mjs';

const sliderMain = new Swiper('.slider_main', {
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
const sliderBg = new Swiper('.slider_bg', {
  centeredSlides: true,
  parallax: true,
  slidesPerView: 3.5,
  spaceBetween: 60,
});
sliderBg.controller.control = sliderMain;

const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('opened');
  });
});
