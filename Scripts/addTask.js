import variables from "./variables.js"
const addTask = () => {
    const task = variables.inNewTask.value;
    if (task) {
        const newElement = /*html*/`
        <li id="task">
            <i class="far ${variables.uncheck}" id="${variables.id}" data="realizado"></i>
            <p class="taskText">${task}</p>
            <i class="fas fa-trash de" id="${variables.id}" data="eliminado" ></i>
        </li>
        `
        variables.taskList.insertAdjacentHTML("beforeend", newElement)
    }
    variables.inNewTask.value = "";
    variables.pushList(task, variables.id, false, false)
    variables.incraseId();
    localStorage.setItem('ToDo', JSON.stringify(variables.list))
    // console.log(variables.list);
};
export default addTask