import {todo, createTodo} from "./todos";

const content = document.getElementById('content');

const taskInfo = ['title', 'description', 'due-date', 'priority'];

// todos header 
const header = document.createElement('div');
header.classList.add('task-header');

taskInfo.forEach(element => {
    const item = document.createElement('p');
    item.textContent = element.toUpperCase();
    header.appendChild(item);
});

content.appendChild(header);

// task 
content.appendChild(createTodo(todo('something', 'more', '1220', 'important')));