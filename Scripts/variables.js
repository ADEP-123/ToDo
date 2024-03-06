class Tarea {
    constructor(nombre, id, realizado, eliminado) {
        this.nombre = nombre,
            this.id = id,
            this.realizado = realizado,
            this.eliminado = eliminado
    }
}
const variables = {
    fecha: document.querySelector("#fecha"),
    reloj: document.querySelector("#reloj"),
    taskList: document.querySelector("#taskList"),
    inNewTask: document.querySelector("#inNewTask"),
    butAddNewTask: document.querySelector("#butAddNewTask"),
    id: 0,
    check: 'fa-check-circle',
    uncheck: 'fa-circle',
    lineThrough: 'completeTask',
    list: [],
    setOldId: function (oldId) {
        this.id = oldId
    },
    incraseId: function () {
        this.id = this.id + 1;
    },
    pushList: function (nombre, id, realizado, eliminado) {
        const nuevaTarea = new Tarea(nombre, id, realizado, eliminado)
        this.list.push(nuevaTarea)
    }
}

export default variables