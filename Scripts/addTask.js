import variables from "./variables.js"
const addTask = (task, id, realizado, eliminado) => {
    if (eliminado) { return };
    const markReal = realizado ? variables.check : variables.uncheck
    const line = realizado ? variables.lineThrough : "";
    const newElement = /*html*/`
    <li id="task">
        <i class="far ${markReal}" id="${id}" data="realizado"></i>
        <p class="taskText ${line}">${task}</p>
        <i class="fas fa-trash de" id="${id}" data="eliminado" ></i>
    </li>
    `
    variables.taskList.insertAdjacentHTML("beforeend", newElement)
};
export default addTask