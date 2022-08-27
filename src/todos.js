const todo = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    };
};

function createTodo(todo) {
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

function fetchTodo() {

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const priority = document.getElementById('priority');
    
    const displayingDiv = document.querySelector('.display');

    let todoObject = todo(
        title.value,
        description.value,
        dueDate.value,
        priority.value
    );

    displayingDiv.appendChild(createTodo(todoObject));

}
export {fetchTodo};