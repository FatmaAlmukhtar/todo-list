(()=>{"use strict";const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("task-header"),["title","description","due-date","priority"].forEach((t=>{const n=document.createElement("p");n.textContent=t.toUpperCase(),e.appendChild(n)})),t.appendChild(e),t.appendChild(function(t){const e=document.createElement("div"),n=document.createElement("p"),d=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p");return n.textContent=t.title,d.textContent=t.description,o.textContent=t.dueDate,c.textContent=t.priority,e.classList.add("task"),e.append(n,d,o,c),e}({title:"something",description:"more",dueDate:"1220",priority:"important"}))})();