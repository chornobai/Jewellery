import Swiper from './vendor/swiper-bundle.js';

function initSwiper(){
  const slider = new Swiper('.slider', {
slidesPerView:4,
slidesPerGroup:4,
spaceBetween:30,
loop:true,

simulateTouch:false,

  breackpoints: {
    320: {
      slidesPerView:2,
      slidesPerGroup:2,
      simulateTouch:true,
    },
767:{
simulateTouch:false,
},
1023:{
  slidesPerView:4,
slidesPerGroup:4,
simulateTouch:false,
},
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',

    clickable:true,

    renderBullet: function (index, className){
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },

  }






});
}

export {initSwiper};
