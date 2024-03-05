import variables from "./variables.js";
const deleteTask = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    variables.list[element.id].eliminado = true;
    localStorage.setItem('ToDo', JSON.stringify(variables.list))
}
export default deleteTask;