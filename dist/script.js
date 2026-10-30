function domLoaded() {
    
    const addBtn = document.querySelector("#add-btn");
    const textbox = document.querySelector("#new-task");

    addBtn.addEventListener("click", addBtnClick);

    textbox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    const doneButtons = document.querySelectorAll(".done-btn");

    for (let button of doneButtons) {
        button.addEventListener("click", removeTask);
    }
}

function addBtnClick() {

    const textbox = document.querySelector("#new-task");
    const newTask = textbox.value.trim();

    if (newTask !== "") {
        addTask(newTask);
    }

    textbox.value = "";
    textbox.focus();
}

function addTask(task) {

    const li = document.createElement("li");

    li.innerHTML = '<span class="task-text">' + task + '</span><button class="done-btn">&#10006;</button>';

    const ol = document.querySelector("ol");

    ol.appendChild(li);

    const doneButtons = document.querySelectorAll(".done-btn");

    doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {

    const li = event.target.parentNode;

    li.parentNode.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);