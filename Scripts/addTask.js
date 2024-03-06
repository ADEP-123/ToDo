import variables from "./variables.js";

const addTask = (task,terminado) => {
    if (task) {
        const varStatus = terminado ? variables.check : variables.uncheck
        const line = terminado ? variables.lineThrough : "";
        if (document.querySelector("#loadingBot")) {
            document.querySelector("#loadingBot").parentNode.removeChild(document.querySelector("#loadingBot"));
        }

        const newElement = /*html*/`
            <li id="task">
                <i class="far ${varStatus}" id="${variables.id}" data="realizado"></i>
                <p class="taskText ${line}">${task}</p>
                <i class="fas fa-trash de" id="${variables.id}" data="eliminado"></i>
            </li>
        `;

        variables.taskList.insertAdjacentHTML("beforeend", newElement);
        variables.pushList(task, variables.id, false, false);
        variables.inNewTask.value = "";
        variables.incraseId();
        localStorage.setItem('ToDo', JSON.stringify(variables.list));
    }
};

export default addTask;