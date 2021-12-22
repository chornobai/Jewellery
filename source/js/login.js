const LOGIN_OVERLAY = 'login-wrapper--overlay';

const loginLinks = document.querySelectorAll('.login-link');
const loginBlock = document.querySelector('.login-wrapper');
const loginClose = loginBlock.querySelector('.login-top-button');
const loginMail = loginBlock.querySelector('#emain-login');
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
  loginForm.reset();
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
