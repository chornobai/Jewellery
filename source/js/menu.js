const menuButton =document.querySelector('.header-top__button');
const menu = document.querySelector('.header');

menu.classList.remove('header-nojs');

menuButton.addEventListener('click', function(evt){
  evt.preventDefault;
  menu.classList.toggle('header-open-menu');
})
