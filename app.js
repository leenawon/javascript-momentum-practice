const loginInput = document.querySelector('.loginForm input');
const loginButton = document.querySelector('.loginForm button');

function handleClickButton() {
  console.log(loginInput.value);
}

loginButton.addEventListener('click', handleClickButton);