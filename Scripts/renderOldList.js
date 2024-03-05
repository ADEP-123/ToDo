import addTask from "./addTask.js";
import variables from "./variables.js";

const renderOldList = (data) => {
    const oldList = JSON.parse(data);
    const oldId = oldList[oldList.length - 1].id;
    oldList.forEach(element => {
        console.log(element.eliminado);
        if (element.eliminado == false) {
            addTask(element.nombre)
        }
    });
    variables.setOldId(oldId)
}

export default renderOldList