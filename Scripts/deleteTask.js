import variables from "./variables.js";
const deleteTask = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    const lastTask = (document.querySelector("#task")) ? true : false;
    if (lastTask == false) {
        document.querySelector("#taskTittle").insertAdjacentHTML("afterend",
        /*html*/`<img src="./img/loadingBot.gif" id="loadingBot">`
        )
    }

    const taskSelect = document.querySelector("#selectTaskPom")



    Object.keys(taskSelect.options).forEach(function (clave) {
        let option = taskSelect.options[clave];
        if (`p${element.id-1}` == clave) {
            option.remove()
        }
    });
    variables.changeCronStatus(false);
    variables.list[element.id].eliminado = true;
    localStorage.setItem('ToDo', JSON.stringify(variables.list))
}
export default deleteTask;