import variables from "./variables.js";
const completeTask = (element) => {
    element.classList.toggle(variables.check)
    element.classList.toggle(variables.uncheck)
    element.parentNode.querySelector(".taskText").classList.toggle(variables.lineThrough)
}

export default completeTask;