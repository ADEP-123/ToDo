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
        document.querySelector("#app").style.cssText = "display: flex;";
        document.querySelector("#panelSup").style.cssText = "display: block;";
    }, 1000);

}
export default iniciadorApp;