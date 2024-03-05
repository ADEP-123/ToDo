import variables from "./variables.js";
import addTask from "./addTask.js";
import completeTask from "./completeTask.js";
import deleteTask from "./deleteTask.js";
import setDate from "./date.js";

// Llamando a la funcion para setear la fecha
setDate()

// Listeners para agregar tareas
variables.butAddNewTask.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    addTask();
})

document.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        addTask()
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
    } else if (elementData === "eliminado") {
        deleteTask(element)
    }

})
