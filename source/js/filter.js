function initFilter(){

const fitlerOpen = document.querySelector('.filter-open');
const filterClose = document.querySelector('.filter-close');
const filterBlock = document.querySelector('.filter');
const filterTriggers = filterBlock.querySelectorAll('h3');



fitlerOpen.addEventListener('click', function(evt){
evt.preventDefault();
filterBlock.classList.add('filter--active');

})

filterClose.addEventListener('click', function(evt){
  evt.preventDefault();
  filterBlock.classList.remove('filter--active');
})

// Accordion

filterTriggers.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const block = item.closest('fieldset');
block.classList.toggle('filter-fieldset--active')

  });
});

}

export {initFilter};

