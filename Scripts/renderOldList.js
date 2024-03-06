import addTask from "./addTask.js";
import variables from "./variables.js";

const renderOldList = (data) => {
    const oldList = JSON.parse(data);
    const oldId = oldList[oldList.length - 1].id;
    let emptyRender = true;
    oldList.forEach(element => {
        if (element.eliminado == false) {
            addTask(element.nombre)
            emptyRender = false;
        }
    });
    if (emptyRender == true) {
        document.querySelector("#taskTittle").insertAdjacentHTML("afterend",
    /*html*/`<img src="./img/loadingBot.gif" id="loadingBot">`
        )
    } else {
        variables.setOldId(oldId)
    }
}

export default renderOldList