import addTask from "./addTask.js";
import variables from "./variables.js";

const renderOldList = (data) => {
    
    let emptyRender = true;
    let oldList = "";
    let oldId = 0;
    if (data) {
        oldList = JSON.parse(data);
        oldId = oldList[oldList.length - 1].id;
        oldList.forEach(element => {
            if (element.eliminado == false) {
                addTask(element.nombre,element.realizado)
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