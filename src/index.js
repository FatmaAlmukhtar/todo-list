import {createTodoForm, createTodoDisplay} from "./website";


const content = document.getElementById('content');

content.appendChild(createTodoForm());
content.appendChild(createTodoDisplay());




