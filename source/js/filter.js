function initFilter() {

  const filterOpen = document.querySelector('.filter-open');
  const filterClose = document.querySelector('.filter-close');
  const filterBlock = document.querySelector('.filter');
  const filterTriggers = filterBlock.querySelectorAll('h3');

  filterBlock.classList.remove('filter--nojs');
  // --- Открыть фильтр

  filterOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterBlock.classList.add('filter--active');
  });

  // --- Закрыть фильтр

  filterClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterBlock.classList.remove('filter--active');
  });

  // --- Accordion

  filterTriggers.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      const block = item.closest('fieldset');
      block.classList.toggle('filter-fieldset--active');
    });
  });

}

export { initFilter };
