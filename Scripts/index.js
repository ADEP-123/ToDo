import variables from "./variables.js";
import addTask from "./addTask.js";
import completeTask from "./completeTask.js";
import deleteTask from "./deleteTask.js";
import setDate from "./date.js";
import currentTime from "./setTime.js";
import iniciadorApp from "./iniciadorApp.js";
import lectorLS from "./lectoLocalStorage.js";
import resumeCronometro from "./resumeCron.js";
import compTaskFromPom from "./compTaskFromPom.js";

document.addEventListener("DOMContentLoaded", () => {
    // Listener para iniciar la app
    const data = lectorLS()
    document.querySelector("#submitNameBtn").addEventListener("click", () => {
        const userName = document.querySelector("#userNameInput").value;
        if (userName.trim() !== "") {
            iniciadorApp(userName, data)
        } else {
            alert("Por favor ingresa un nombre para continuar")
        }
    });


    // Llamando a la funcion para setear la fecha
    setDate()

    // Llamando funcion que crea el reloj
    setInterval(currentTime, 1000);


    // Listeners para agregar tareas
    variables.butAddNewTask.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addTask(variables.inNewTask.value, variables.fecaTareaInp.value, false);
    })

    document.addEventListener("keyup", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key == "Enter") {
            addTask(variables.inNewTask.value, variables.fecaTareaInp.value, false);
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

    // Cronometro
    let cronInterval = null;

    document.querySelector("#panelCronometro").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.id == "resCronBut") {
            variables.changeCronStatus(true)
            if (cronInterval !== null) clearInterval(cronInterval);
            cronInterval = setInterval(resumeCronometro, 1000);
        } else if (e.target.id == "stopCronBut") {
            variables.changeCronStatus(false)
            if (cronInterval !== null) {
                clearInterval(cronInterval);
                cronInterval = null;
            }
        } else if (e.target.id == "comTaskButPom") {
            variables.changeCronStatus(false)
            if (cronInterval !== null) {
                clearInterval(cronInterval);
                cronInterval = null;
            }
            const taskSelect = document.querySelector("#selectTaskPom")
            const numbTask = taskSelect.value
            const element = document.querySelector('#taskList').querySelectorAll('li')[numbTask - 1].querySelectorAll('i')[0]
            compTaskFromPom(element)
        }
        if (cronInterval !== null) {
            document.querySelector("#robotStatus").setAttribute("src", "img/workingRobot.gif")
        } else {
            document.querySelector("#robotStatus").setAttribute("src", "img/restingReobot.gif")
        }

    })

})