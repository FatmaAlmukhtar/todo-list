import {saveToLocalStorage, loadTodos} from './navigateFolders';

let myFolders = {'main': []};

const todo = (title, description, dueDate, priority, folder) => {
    return {
        title,
        description,
        dueDate,
        priority,
        folder
    };
};

function createTodo(todo) {
    if(!myFolders[todo.folder]) myFolders[todo.folder] = [];
    myFolders[todo.folder].push(todo);
    saveToLocalStorage(todo.folder, myFolders);

    const currentFolder = document.querySelector('.currentFolder').textContent;
    if(currentFolder.split(' ')[0].toLowerCase() === todo.folder) {
        const task = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskDate = document.createElement('p');
        const taskPriority = document.createElement('p');
        
        taskTitle.textContent = todo.title;
        taskDescription.textContent = todo.description;
        taskDate.textContent = todo.dueDate;
        taskPriority.textContent = todo.priority;

        task.classList.add('task');
        task.append(taskTitle, taskDescription, taskDate, taskPriority);

        return task;
    }
    return document.createElement('div');
    

    
}

function fetchTodo() {

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const priority = document.getElementById('priority');
    const folder = document.getElementById('folder');

    const todoDiv = document.querySelector('.todo-list');

    let todoObject = todo(
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        folder.value
    );

    
    todoDiv.appendChild(createTodo(todoObject));

}
export {fetchTodo};