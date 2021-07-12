const loginForm = document.querySelector('.loginForm');

const loginInput = document.querySelector('.loginForm input');

const welcomeMessage = document.querySelector('h1.welcome');

const HIDDEN_CLASS = 'hidden';

const USER_NAME = 'userName';

// handle Login Submit Event
function handleLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const userNameValue = loginInput.value;
  localStorage.setItem(USER_NAME, userNameValue);
  showWelcomeMessage(userNameValue);
}

// show Welcome Message
function showWelcomeMessage(name) {
  welcomeMessage.innerText = `안녕하세요! ${name}님`;
  welcomeMessage.classList.remove(HIDDEN_CLASS);
}

// LocalStorage에서 불러온 User Name
const getUserName = localStorage.getItem(USER_NAME);

if(getUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  showWelcomeMessage(getUserName);
}