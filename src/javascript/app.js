const loginForm = document.querySelector('.loginForm');
const loginInput = document.querySelector('.loginForm input');

function handleLoginFormSubmit(event) {
  const userNameValue = loginInput.value;
  event.preventDefault();
  console.log(userNameValue);
}

loginForm.addEventListener('submit', handleLoginFormSubmit);