import variables from "./variables.js";
const deleteTask = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
}
export default deleteTask;