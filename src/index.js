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

sliderMain.controller.control = sliderBg;

const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach(item => {
  item.addEventListener('click', event => {
    // const openedSlide = document.querySelector('.slider__item.opened');
    // if (openedSlide) {
    //   openedSlide.classList.remove('opened');
    // }
    item.classList.toggle('opened');
  });
});

document.addEventListener('click', event => {
  if (event.currentTarget && !event.target.classList.contains('slider__img')) {
    sliderItems.forEach(item => {
      item.classList.remove('opened');
    });
  }
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0
    ? desc.classList.add('hidden')
    : desc.classList.remove('hidden');
});
