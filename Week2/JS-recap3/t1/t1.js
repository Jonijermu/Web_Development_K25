// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function addTodoContent() {
  const ul = document.querySelector('ul');

  ul.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="todo-1" ${todoList[0].completed ? 'checked' : ''}>
      <label for="todo-1">${todoList[0].task}</label>
    </li>
    <li>
      <input type="checkbox" id="todo-2" ${todoList[1].completed ? 'checked' : ''}>
      <label for="todo-2">${todoList[1].task}</label>
    </li>
    <li>
      <input type="checkbox" id="todo-3" ${todoList[2].completed ? 'checked' : ''}>
      <label for="todo-3">${todoList[2].task}</label>
    </li>
    <li>
      <input type="checkbox" id="todo-4" ${todoList[3].completed ? 'checked' : ''}>
      <label for="todo-4">${todoList[3].task}</label>
    </li>
    <li>
      <input type="checkbox" id="todo-5" ${todoList[4].completed ? 'checked' : ''}>
      <label for="todo-5">${todoList[4].task}</label>
    </li>
  `);
}

addTodoContent();


