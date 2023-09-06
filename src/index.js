import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
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
  sliderMain.controller.control = sliderBg;
});

const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach(sliderItem => {
  sliderItem.addEventListener('click', event => {
    sliderItem.classList.toggle('opened');
  });
});
