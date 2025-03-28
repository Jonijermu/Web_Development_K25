// array for todolist
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

// add your code here
const ul = document.querySelector('ul');

function addTodoContent() {
  for (let todo of todoList) {
    console.log(todo)
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const delButton = document.createElement('button');
    delButton.textContent = 'Del';

    checkBox.type = 'checkbox';
    checkBox.id = 'todo-' + todo.id;
    checkBox.checked = todo.completed;

    delButton.addEventListener('click', () => {
      deleteItem(todo);
      ul.removeChild(li);
    });
    const label = document.createElement('label');
    label.setAttribute('for', checkBox.id);
    label.textContent = todo.task
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(delButton);
    ul.appendChild(li);

    checkBox.addEventListener('click', () => {
      todo.completed = checkBox.checked;
      console.log(todoList)
    });
  }
}

function deleteItem(todo) {
  const index = todoList.findIndex(item => item.id === todo.id);
  todoList.splice(index, 1);
  console.log(todoList);
}

const button = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');

button.addEventListener('click', () => {
  addTodoItem();
});

const form = modal.querySelector('form');
const input = modal.querySelector('input');


function addTodoItem() {
  modal.showModal();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todo = input.value;
    if (todo) {
      todoList.push({
        id: todoList.length + 1,
        task: todo,
        completed: false
      });
      input.value = '';
      ul.innerHTML ='';
      modal.close();
      addTodoContent();
    }
  });
}

addTodoContent();
