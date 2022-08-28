import { loadTodos } from "./navigateFolders";
import {fetchTodo} from "./todos";
import { displayFolderItems } from "./navigateFolders";

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
            itemInput.id = element;
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
        let item = document.createElement('p');
        if(element === 'folder') {
            item = document.createElement('button');
            item.textContent = 'Main ' + element.toUpperCase();
            item.classList.add('currentFolder');
            showFolderList(displayingDiv, item);
        }
        else item.textContent = element.toUpperCase();
        header.appendChild(item);
    });

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-list');

    displayingDiv.appendChild(header);
    displayingDiv.appendChild(todoDiv);

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

        if(folder === selectedFolder) {
            option.selected = true; 
            updateFolderList(selectedFolder);
        }

        dropdown.appendChild(option);
    });
}

function showFolderList(displayingDiv, folderButton) {
    const folderList = document.createElement('ul');
    folderList.classList.add('folder-list');

    folders.forEach(folder => {
        const item = document.createElement('li');
        const itemButton = document.createElement('button');
        itemButton.addEventListener('click', () => {
            displayFolderItems(folder);
            folderList.style.display = 'none';
            folderButton.textContent = itemButton.textContent + ' folder';
        });
        itemButton.textContent = folder;
        item.appendChild(itemButton);
        folderList.appendChild(item);
    });
    displayingDiv.appendChild(folderList);
    folderList.style.display = 'none';
    
    folderButton.addEventListener('mouseover', () => {
        folderList.style.display = 'block';
    });
    
}
function updateFolderList(item) {
    if(!document.querySelector('ul')) return;

    const folderButton = document.querySelector('.currentFolder');

    const folderList = document.querySelector('ul')
    const listItem = document.createElement('li');
    const itemButton = document.createElement('button');
    itemButton.textContent = item;
    itemButton.addEventListener('click', () => {
        displayFolderItems(itemButton.textContent);
        folderList.style.display = 'none';
        folderButton.textContent = itemButton.textContent + ' folder';
    });
    listItem.appendChild(itemButton);
    folderList.appendChild(listItem);
    
}
export {createTodoForm, createTodoDisplay};