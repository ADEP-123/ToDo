import variables from "./variables.js";
const completeTask = (element) => {
    element.classList.toggle(variables.check);
    element.classList.toggle(variables.uncheck);
    element.parentNode.querySelector(".taskText").classList.toggle(variables.lineThrough);
    variables.list[element.id].realizado = variables.list[element.id].realizado ? false : true;
    localStorage.setItem('ToDo', JSON.stringify(variables.list));

}

export default completeTask;