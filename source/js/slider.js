
import Swiper from './vendor/swiper-bundle.js';

function initSwiper() {
  const slider = new Swiper('.slider', {
    direction: 'horizontal',

    initialSlide: 0,
    slidesPerView: 4,
    slidesPerGroup: 4,


    loop: true,

    touchRatio: 0,
    simulateTouch: false,

    observer: true,
    observeParents: true,
    observeSliderChildren: true,

    watchOverflow: true,
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',

          renderFraction: function (currentClass, totalClass) {
            return ` <span class="${currentClass}"></span>  of  <span class="${totalClass}"></span>`;
          },

        },
        touchRatio: 1,
        simulateTouch: true,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        touchRatio: 1,
        simulateTouch: true,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        touchRatio: 0,
        simulateTouch: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',

          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
        watchOverflow: true,
      },
    },
  });
  return slider;
}

export { initSwiper };
