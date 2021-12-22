const menuButton =document.querySelector('.header-top__button');
const menu = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.navigation-link');

menu.classList.remove('header-nojs');

menuButton.addEventListener('click', (evt)=> {
  evt.preventDefault();
  menu.classList.toggle('header-open-menu');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    menu.classList.remove('header-open-menu');
    const blockId = item.getAttribute('href');
    document.querySelector(`${  blockId}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
