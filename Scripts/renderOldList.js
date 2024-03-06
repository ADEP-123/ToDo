import addTask from "./addTask.js";
import variables from "./variables.js";

const renderOldList = (data) => {

    let emptyRender = true;
    let oldList = data;
    let oldId = 1;
    if (data) {
        if (oldList.length > 1) {
            oldId = oldList[oldList.length - 1].id + 1;
        }

        oldList.forEach(element => {
            if (element.eliminado == false) {
                addTask(element.nombre, element.realizado)
                emptyRender = false;
            }
        });
    }
    if (emptyRender == true) {
        document.querySelector("#taskTittle").insertAdjacentHTML("afterend",
    /*html*/`<img src="./img/loadingBot.gif" id="loadingBot">`
        )
    } else {
        variables.setOldId(oldId)
    }
}

export default renderOldList