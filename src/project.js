// this file will deal with the project items, which will include an array of todo items

class Project{
    constructor(title){
        this.title = title;
        this.todos = [];
    }

    setTitle(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }

    getTodos(){
        return this.todos;
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    deleteTodo(todo){
        // deletes todo from the array
    }
}

export default Project;
