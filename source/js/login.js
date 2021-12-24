const LOGIN_OVERLAY = 'login-wrapper--overlay';

const loginLinks = document.querySelectorAll('.login-link');
const loginBlock = document.querySelector('.login-wrapper');
const loginClose = loginBlock.querySelector('.login-top-button');
const loginMail = loginBlock.querySelector('#email-login');
const loginForm = loginBlock.querySelector('form');


// Проверка - поддерживает ли браузер запись в LocalStorage //
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


// Открытие модального окна и фокус в поле Email ---

loginLinks.forEach((link) => {
  link.addEventListener('click', (evt)=> {
    evt.preventDefault();
    loginBlock.classList.add(LOGIN_OVERLAY);
    loginMail.focus();
    if (storage) {
      loginMail.focus();
    }

  });

});


// Запись в LocalStorage ---

loginForm.addEventListener('submit', (evt) => {
  if(!loginMail.value){
    evt.preventDefault();
  }
  if (isStorageSupport) {
    localStorage.setItem('email', loginMail.value);
  }

});

// Закрытие модального окна ---

// Кнопка

loginClose.addEventListener('click', (evt)=> {
  evt.preventDefault();
  loginBlock.classList.remove(LOGIN_OVERLAY);


});

// Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    loginBlock.classList.remove(LOGIN_OVERLAY);
  }
});
// Overlay
document.addEventListener('click', (evt) => {
  if (evt.target === loginBlock) {
    loginBlock.classList.remove(LOGIN_OVERLAY);
  }
});

// ---

// --- Зацикленный фокус ---

// add all the elements inside modal which you want to make focusable
const  focusableElements =
    'button, [href], input,  [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('.login-wrapper'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


document.addEventListener('keydown', (e) => {
  const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
