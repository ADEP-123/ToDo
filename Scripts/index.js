import variables from "./variables.js";
import addTask from "./addTask.js";

variables.butAddNewTask.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const task = variables.inNewTask.value;
    if (task) {
        addTask(task)
    }
    variables.inNewTask.value = "";
})

document.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        const task = variables.inNewTask.value;
        if (task) {
            addTask(task)
        }
        variables.inNewTask.value = "";
    }
})
