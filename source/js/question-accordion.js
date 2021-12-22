function initMainAccordion() {
  const questionBlock = document.querySelector('.questions');
  const questionTriggers = questionBlock.querySelectorAll('h3');

  questionBlock.classList.remove('questions--nojs');

  // Accordion for questions

  questionTriggers.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      const block = item.closest('li');
      block.classList.toggle('questions-item--active');

    });
  });
}

export { initMainAccordion };
