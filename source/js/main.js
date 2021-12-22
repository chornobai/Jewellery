import './menu.js';
import './login.js';
import { initSwiper } from './slider.js';
import { initFilter } from './filter.js';
import { initMainAccordion } from './question-accordion';


// Проверка активной страницы ---

const CATALOG_PAGE = document.querySelector('.main-catalog');

if (CATALOG_PAGE) {
  initFilter();
}
else {
  initMainAccordion();
  initSwiper();

}
