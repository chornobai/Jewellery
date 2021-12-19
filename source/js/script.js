import  './menu.js';
import  './login.js';
// import  './slider.js';
import {initFilter} from './filter.js';
import {initMainAccordion} from './question-accordion';


const MAIN_PAGE = document.querySelector('.main');
const CATALOG_PAGE = document.querySelector('.main-catalog');


if (CATALOG_PAGE){
  initFilter();
}else{
initMainAccordion();
}


