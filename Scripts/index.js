import variables from "./variables.js";
import addTask from "./addTask.js";
import completeTask from "./completeTask.js";

// Listeners para agregar tareas
variables.butAddNewTask.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const task = variables.inNewTask.value;
    if (task) {
        addTask(task, variables.id, false, false)
    }
    variables.inNewTask.value = "";
    variables.incraseId();
})

document.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        const task = variables.inNewTask.value;
        if (task) {
            addTask(task, variables.id, false, false)
        }
        variables.inNewTask.value = "";
        variables.incraseId();
    }
})

// Listener para agregar o eliminar tareas
variables.taskList.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const element = e.target;
    const elementData = element.attributes.data.value;
    if (elementData === "realizado") {
        completeTask(element);
    } else if (elementData === "eliminado"){
        // tareaEliminada()
    }

})
