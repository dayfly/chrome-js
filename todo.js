const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDOlist");

const TODOS_LS = 'toDOs';

function paintoDo(text){
    console.log(text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintoDo(currentValue);
}
function loadToDos(){
    const toDOs = localStorage.getItem(TODOS_LS);
    if(toDOs !== null){
    }
}
function init() { 
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();