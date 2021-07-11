const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('ul.todoList');

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  showTodo(todoValue);
}

function showTodo(todo) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  listItem.appendChild(span);
  span.innerText = todo;
  todoList.appendChild(listItem);
}

todoForm.addEventListener('submit', handleTodoFormSubmit);