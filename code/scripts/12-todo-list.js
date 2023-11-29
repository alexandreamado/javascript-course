const todoList = [

    {name: 'make dinner',
     dueDate: '2022-12-22'
    },
    {
        name: 'wash dinner',
        dueDate: '2022-12-23'
    }
];

randomTodoList()

function randomTodoList(){
let todoListHTML = '';

todoList.forEach((todoObject, index) =>{
    let { name, dueDate } = todoObject;

    const html = `
    <div> ${name} </div>
    <div> ${dueDate} </div>
        <button class="delete-todo-button
        js-delete-todo-button
        ">Delete</button>`;
    todoListHTML += html
})

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            randomTodoList()
        })
    });

    console.log(index)

}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo()
    })

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;


    todoList.push({name,dueDate})


    inputElement.value = '';
    randomTodoList()
}