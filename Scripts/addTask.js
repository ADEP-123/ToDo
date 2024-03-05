import variables from "./variables.js"
const addTask = (task) => {
    const newElement = /*html*/`
    <li id="task">
        <i class="far fa-circle co" id="0" data="realizado"></i>
        <p class="taskText">${task}</p>
        <i class="fas fa-trash de" data="eliminado" id="0"></i>
    </li>
    `
    variables.taskList.insertAdjacentHTML("beforeend", newElement)
};
export default addTask