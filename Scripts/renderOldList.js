import addTask from "./addTask";
import variables from "./variables";

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