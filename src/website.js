import {fetchTodo} from "./todos";

const taskInfo = ['title', 'description', 'due-date', 'priority'];

function createTodoForm() {
    // a div to collect todo info (left side of screen)
    const writingDiv = document.createElement('div');
    
    const todoForm = document.createElement('form');
    todoForm.classList.add('form');

    taskInfo.forEach(element => {
        const itemLabel = document.createElement('label');
        const itemInput = document.createElement('input');

        itemInput.id = element;
        itemInput.type = 'text';

        itemLabel.for = element;
        itemLabel.textContent = element.toUpperCase();

        todoForm.append(itemLabel, itemInput);
    })
    const submitTodo = document.createElement('button');
    submitTodo.type = 'button';
    submitTodo.textContent = 'SUBMIT';
    todoForm.appendChild(submitTodo);
    submitTodo.addEventListener('click', () => {
        fetchTodo();
        todoForm.reset();
    });
    writingDiv.appendChild(todoForm);

    return writingDiv;
}

function createTodoDisplay() {
    // a div to display todos (right side of screen);
    const displayingDiv = document.createElement('div');
    displayingDiv.classList.add('display');

    // todos header 
    const header = document.createElement('div');
    header.classList.add('task-header');

    taskInfo.forEach(element => {
        const item = document.createElement('p');
        item.textContent = element.toUpperCase();
        header.appendChild(item);
    });

    displayingDiv.appendChild(header);

    return displayingDiv;
}

export {createTodoForm, createTodoDisplay};