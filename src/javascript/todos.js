const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('ul.todoList');

function handleDeleteButton(event) {
  const deleteListItem = event.target.parentElement;
  deleteListItem.remove();
}

function showTodo(todo) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = todo;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '❌';

  deleteButton.addEventListener('click', handleDeleteButton);
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);
}

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  showTodo(todoValue);
}

todoForm.addEventListener('submit', handleTodoFormSubmit);