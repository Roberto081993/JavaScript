

const textInput     = document.getElementById("input-box");
const addTaskBtn    = document.getElementById("addTaskBtn");
const listContainer = document.getElementById("list-container"); 

function addTask(){
    var task       = document.createElement('li');
    task.innerText = textInput.value;
    listContainer.appendChild(task);

}