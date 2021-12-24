function initMainAccordion() {
  const questionBlock = document.querySelector('.questions');
  const questionTriggers = questionBlock.querySelectorAll('.questions-item');

  questionBlock.classList.remove('questions--nojs');

  // Accordion for questions

  questionTriggers.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('questions-item--active');
      item.blur();

    });
  });
}

export { initMainAccordion };
