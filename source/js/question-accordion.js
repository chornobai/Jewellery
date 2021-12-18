const questionTriggers = document.querySelector('.questions').querySelectorAll('h3');

questionTriggers.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const block = item.closest('li');
block.classList.toggle('questions-item--active')

  });
});
