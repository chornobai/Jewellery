
import Swiper from './vendor/swiper-bundle.js';

function initSwiper() {
  const slider = new Swiper('.slider-row', {
    direction: 'horizontal',
    spaceBetween: 15,

    keyboardControl: true,
    updateOnWindowResize: true,
    touchRatio: 0,
    simulateTouch: false,

    observer: true,
    observeParents: true,
    observeSliderChildren: true,

    watchSlidesProgress:true,
    preloadImages: true,
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

      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        touchRatio: 1,
        simulateTouch: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',

          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },

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

    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

  });

  const buttons = document.querySelectorAll('.slider-button');
  buttons.forEach((item) => {
    item.setAttribute('tabindex', '0');
    item.removeAttribute('aria-disabled');
    item.removeAttribute('disabled');
    item.classList.remove('swiper-button-disabled');

    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.setAttribute('tabindex', '0');
      item.removeAttribute('aria-disabled');
      item.removeAttribute('disabled');
      item.classList.remove('swiper-button-disabled');
    });
  });
  return slider;

}

export { initSwiper };
