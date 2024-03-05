import variables from "./variables.js"
const addTask = (task) => {
    if (task) {
        const newElement = /*html*/`
        <li id="task">
            <i class="far ${variables.uncheck}" id="${variables.id}" data="realizado"></i>
            <p class="taskText">${task}</p>
            <i class="fas fa-trash de" id="${variables.id}" data="eliminado" ></i>
        </li>
        `
        variables.taskList.insertAdjacentHTML("beforeend", newElement)
        variables.pushList(task, variables.id, false, false)
        variables.inNewTask.value = "";
        variables.incraseId();
        localStorage.setItem('ToDo', JSON.stringify(variables.list))
    }
};
export default addTask