const loginForm = document.querySelector('.loginForm');

const loginInput = document.querySelector('.loginForm input');

const welcomeMessage = document.querySelector('.welcome');

const HIDDEN_CLASS = 'hidden';

function handleLoginFormSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASS);
  const userNameValue = loginInput.value;
  
  welcomeMessage.classList.remove(HIDDEN_CLASS);
  welcomeMessage.innerText = `안녕하세요! ${userNameValue}님`;
}

loginForm.addEventListener('submit', handleLoginFormSubmit);