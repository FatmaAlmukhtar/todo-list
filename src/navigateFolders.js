function saveToLocalStorage(folder, myList) {
  
    localStorage.setItem(folder, JSON.stringify(myList[folder]));
    
    
}

function loadTodos(folder) {
    let temp = localStorage.getItem(folder);
    temp = JSON.parse(temp);
    return temp;
}

function displayFolderItems(folder) {

    let todos = loadTodos(folder);

    const todoDiv = document.querySelector('.todo-list');

    while(todoDiv.firstChild) {
        todoDiv.removeChild(todoDiv.firstChild);
    }
        
    if(!todos) return;
    todos.forEach(todo => {
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

        todoDiv.appendChild(task);
    });
    

}
export {saveToLocalStorage, loadTodos, displayFolderItems};