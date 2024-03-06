import renderOldList from "./renderOldList.js";
import variables from "./variables.js";
const iniciadorApp = (nombre, data) => {
    variables.setUserName(nombre);
    document.querySelector("#mensBievenida").innerHTML = `Bienvenido ${variables.userName}`
    document.querySelector("#initialView").style.display = "none";
    document.querySelector("#transitionContainer").style.display = "flex";

    renderOldList(data)

    setTimeout(() => {
        document.querySelector("#transitionContainer").style.display = "none";
        document.querySelector(".container").style.cssText = "display: flex; flex-direction: column;";
    }, 4000);

}
export default iniciadorApp;