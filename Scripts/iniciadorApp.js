import variables from "./variables.js";
const iniciadorApp = (nombre) => {
    variables.setUserName(nombre);
    document.querySelector("#mensBievenida").innerHTML = `Bienvenido ${variables.userName}`
    document.querySelector("#initialView").style.display = "none";
    document.querySelector("#container").style.display = "flex";

}
export default iniciadorApp;