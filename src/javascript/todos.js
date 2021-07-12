const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('ul.todoList');
const toDoArray = [];

function saveTodo() {
  localStorage.setItem('toDos', JSON.stringify(toDoArray));
}

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
  toDoArray.push(todoValue);
  showTodo(todoValue);
  saveTodo();
}

todoForm.addEventListener('submit', handleTodoFormSubmit);