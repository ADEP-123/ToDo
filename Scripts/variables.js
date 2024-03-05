const variables = {
    fecha: document.querySelector("#fecha"),
    taskList: document.querySelector("#taskList"),
    inNewTask: document.querySelector("#inNewTask"),
    butAddNewTask: document.querySelector("#butAddNewTask"),
    id: 0,
    check: 'fa-check-circle',
    uncheck: 'fa-circle',
    lineThrough: 'completeTask',
    list: [],
    incraseId: function () {
        this.id = this.id + 1;
    },
    pushList: function (nombre, id, realizado, eliminado) {
        this.list.push({
            nombre,
            id,
            realizado,
            eliminado
        })
    }
}
export default variables