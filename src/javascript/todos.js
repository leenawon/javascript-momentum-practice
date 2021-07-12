const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('ul.todoList');

let toDoArray = [];

const TODO_KEY = 'toDos';

// save Todo
function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

// handle Delete Button
function handleDeleteButton(event) {
  const deleteListItem = event.target.parentElement;
  deleteListItem.remove();
}

// show Todo
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

// handle Todo Form Submit
function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  toDoArray.push(todoValue);
  showTodo(todoValue);
  saveTodo();
}

// Todo Form Submit Event Listener
todoForm.addEventListener('submit', handleTodoFormSubmit);

// LocalStorage에서 불러온 Todo Item
const getTodo = localStorage.getItem(TODO_KEY);

if(getTodo !== null) {
  const parseTodo = JSON.parse(getTodo);
  toDoArray = parseTodo;
  parseTodo.forEach(showTodo);
}