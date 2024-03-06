import variables from "./variables.js";
import addTask from "./addTask.js";
import completeTask from "./completeTask.js";
import deleteTask from "./deleteTask.js";
import setDate from "./date.js";
import renderOldList from "./renderOldList.js";
import currentTime from "./setTime.js";
import iniciadorApp from "./iniciadorApp.js";

document.addEventListener("DOMContentLoaded", () => {
    // Listener para iniciar la app
    document.querySelector("#submitNameBtn").addEventListener("click", () => {
        const userName = document.querySelector("#userNameInput").value;
        if (userName.trim() !== "") {
            iniciadorApp(userName)
        } else {
            alert("Por favor ingresa un nombre para continuar")
        }
    });


    // Llamando a la funcion para setear la fecha
    setDate()

    // Llamando funcion que crea el reloj
    setInterval(currentTime, 1000);

    // Render from local Storage
    let data = localStorage.getItem("ToDo")
    renderOldList(data)

    // Listeners para agregar tareas
    variables.butAddNewTask.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addTask(variables.inNewTask.value, false);
    })

    document.addEventListener("keyup", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key == "Enter") {
            addTask(variables.inNewTask.value, false);
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

})