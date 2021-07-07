const loginForm = document.querySelector('.loginForm');

const loginInput = document.querySelector('.loginForm input');

const welcomeMessage = document.querySelector('.welcome');

const HIDDEN_CLASS = 'hidden';

const USER_NAME = 'userNameValue';

function handleLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const userNameValue = loginInput.value;
  localStorage.setItem(USER_NAME, userNameValue);
  showWelcomeMessage(userNameValue);
}

function showWelcomeMessage(userName) {
  welcomeMessage.innerText = `안녕하세요! ${userName}님`;
  welcomeMessage.classList.remove(HIDDEN_CLASS);
}

const getUserName = localStorage.getItem(USER_NAME);

if(getUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  showWelcomeMessage(getUserName);
}