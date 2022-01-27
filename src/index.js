import Project from './project'
import Todo from './todo.js'

const add_project_button = document.getElementById('new_project_button');
const add_project_modal = document.getElementById('project_modal');
const add_project_form = document.getElementById('project_name_input');
const add_project = document.getElementById('addProject');

let projectList = [];

add_project_button.addEventListener('click', () => {
    add_project_modal.style.display = 'block';
})

add_project.addEventListener('click', () => {
    console.log('test');
    let a = new Project(add_project_form.value);
    projectList.push(a);
    add_project_modal.style.display = 'none';
})

window.onclick = function(event){
    if(event.target == add_project_modal)
        add_project_modal.style.display = 'none';
}
