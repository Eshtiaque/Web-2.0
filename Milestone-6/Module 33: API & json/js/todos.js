function loadTodos(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(data=>displayTodos(data))
}

function displayTodos(todos){
    //get the container
    const todoContainer =document.getElementById('todo-container');
for (const todo of todos ){
    //create the child element
        const todoDiv =document.createElement('div');
        //set inner html
        todoDiv.innerHTML=`
        <h4>title: ${todo.title} </h4>
        <p>user: ${todo.userId}  </p>
        <p>Is completed: ${todo.completed ===true? 'complete':'not complete'}  </p>
        `;//turnary use
        //append child
        todoContainer.appendChild(todoDiv);
}

}
loadTodos();