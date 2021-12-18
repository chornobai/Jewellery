let offset = 0;  // смещение от левого края
const sliderButtonLeft= document.querySelector('.slider-button--left');
const sliderButtonRight= document.querySelector('.slider-button--right');
const sliderPagination = document.querySelectorAll ('.slider-pagination__item');
const sliderList = document.querySelector('.slider-row__list');

sliderButtonRight.addEventListener('click', function(evt){
  evt.preventDefault();
  offset = offset + 300;
  if(offset > 2400){
    offset = 2400;
  }
  sliderList.style.left =  - offset + 'px';
});


sliderButtonLeft.addEventListener('click', function(evt){
  evt.preventDefault();
  offset = offset - 300;
  if(offset < 0){
    offset = 0;
  }
  sliderList.style.left =  - offset + 'px';
});
