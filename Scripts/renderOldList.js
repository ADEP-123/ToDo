import addTask from "./addTask.js";
import variables from "./variables.js";

const renderOldList = (data) => {
    console.log(data);
    const oldList = JSON.parse(data);
    const oldId = oldList[oldList.length - 1].id;
    data.forEach(element => {
        addTask(element.nombre)
    });
    variables.setOldId(oldId)
}

export default renderOldList