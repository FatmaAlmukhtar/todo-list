import {fetchTodo} from "./todos";

const taskInfo = ['title', 'description', 'due-date', 'priority', 'folder'];
let folders = ['main'];

function createTodoForm() {
    // a div to collect todo info (left side of screen)
    const writingDiv = document.createElement('div');
    
    const todoForm = document.createElement('form');
    todoForm.classList.add('form');

    taskInfo.forEach(element => {
        const itemLabel = document.createElement('label');
        itemLabel.for = element;
        itemLabel.textContent = element.toUpperCase();

        let itemInput;
        let selectedFolder;

        if(element === 'folder') {
            itemInput = document.createElement('select');
            createDropdown(itemInput, selectedFolder='main');

            const newFolder = document.createElement('button');
            newFolder.type = 'button';
            newFolder.textContent = '+ new folder';
            itemLabel.appendChild(newFolder);
            newFolder.addEventListener('click', () => {
                folders.push(prompt('What is the folder name?'));
                createDropdown(itemInput, selectedFolder = folders[folders.length-1]);
            });

        }
        else {
            itemInput = document.createElement('input');
    
            itemInput.id = element;
            itemInput.type = 'text';
        }

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

function createDropdown(dropdown, selectedFolder) {
    while (dropdown.firstChild) {
        dropdown.removeChild(dropdown.firstChild);
    }
    folders.forEach(folder => {
        const option = document.createElement('option');
        
        option.textContent = folder;
        option.value = folder;

        if(folder === selectedFolder) option.selected = true; 

        dropdown.appendChild(option);
    });
}
export {createTodoForm, createTodoDisplay};