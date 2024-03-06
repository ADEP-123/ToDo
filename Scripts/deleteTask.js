import variables from "./variables.js";
const deleteTask = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    const lastTask = (document.querySelector("#task")) ? true : false;
    if (lastTask == false) {
        document.querySelector("#taskTittle").insertAdjacentHTML("afterend",
        /*html*/`<img src="./img/loadingBot.gif" id="loadingBot">`
        )
    }
    variables.list[element.id].eliminado = true;
    localStorage.setItem('ToDo', JSON.stringify(variables.list))
}
export default deleteTask;