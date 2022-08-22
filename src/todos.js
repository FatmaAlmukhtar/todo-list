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
export {todo, createTodo};