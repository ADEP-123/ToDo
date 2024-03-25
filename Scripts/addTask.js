import variables from "./variables.js";

const addTask = (task, fechaTarea, terminado) => {
    const fecha = variables.fechaActual;
    if (task && fechaTarea) {
        const timeLeft = new Date(fechaTarea) - fecha;
        let classTimeColor = "";
        if (timeLeft <= 86400000) {
            classTimeColor = "nextToExpire"
        } else if (timeLeft <= (86400000 * 3)) {
            classTimeColor = "soonToExpire"
        } else {
            classTimeColor = "farToExpire"
        }
        const varStatus = terminado ? variables.check : variables.uncheck
        const line = terminado ? variables.lineThrough : "";
        const listPom = document.querySelector("#selectTaskPom")
        if (document.querySelector("#loadingBot")) {
            document.querySelector("#loadingBot").parentNode.removeChild(document.querySelector("#loadingBot"));
        }

        const newElement = /*html*/`
            <li id="task" class="${classTimeColor}">
                <i class="far ${varStatus}" id="${variables.id}" data="realizado"></i>
                <p class="taskText ${line}">${task} <br>FL: ${fechaTarea}</p>
                <i class="fas fa-trash de" id="${variables.id}" data="eliminado"></i>
            </li>
        `;

        const newElOption = /*html*/`
            <option value="${variables.id}" id="p${variables.pomVarId}">${task}</option>
         `;


        listPom.insertAdjacentHTML("beforeend", newElOption);
        variables.incrasePomVarId()


        variables.taskList.insertAdjacentHTML("beforeend", newElement);
        variables.pushList(task, variables.id, fechaTarea, false, false);
        variables.inNewTask.value = "";
        variables.incraseId();
        localStorage.setItem('ToDo', JSON.stringify(variables.list));
    } else {
        alert("La tarea debe tener un numbre y una fecha")
    }
};

export default addTask;