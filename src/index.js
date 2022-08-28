import {createTodoForm, createTodoDisplay} from "./website";
import { displayFolderItems } from "./navigateFolders";

const content = document.getElementById('content');

content.appendChild(createTodoForm());
content.appendChild(createTodoDisplay());

displayFolderItems('main');




