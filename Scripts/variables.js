class Tarea {
    constructor(nombre, id, fechaTarea, realizado, eliminado) {
        this.nombre = nombre,
            this.id = id,
            this.fechaTarea = fechaTarea,
            this.realizado = realizado,
            this.eliminado = eliminado
    }
}
const variables = {
    userName: "",
    pomVarId: 0,
    fechaActual: new Date(),
    fecaTareaInp: document.querySelector("#taskDate"),
    fecha: document.querySelector("#fecha"),
    reloj: document.querySelector("#reloj"),
    taskList: document.querySelector("#taskList"),
    inNewTask: document.querySelector("#inNewTask"),
    butAddNewTask: document.querySelector("#butAddNewTask"),
    id: 1,
    check: 'fa-check-circle',
    uncheck: 'fa-circle',
    lineThrough: 'completeTask',
    list: [],
    cronStatus: false,
    incrasePomVarId: function () {
        this.pomVarId = this.pomVarId + 1
    },
    setUserName: function (newUsername) {
        if (this.list.length === 0) {
            this.list.push(newUsername)
        }
        this.userName = newUsername
    },
    setOldId: function (oldId) {
        this.id = oldId
    },
    incraseId: function () {
        this.id = this.id + 1;
    },
    pushList: function (nombre, id, fechaTarea, realizado, eliminado) {
        const nuevaTarea = new Tarea(nombre, id, fechaTarea, realizado, eliminado)
        this.list.push(nuevaTarea)
    },
    changeCronStatus: function (status) {
        this.cronStatus = status
    }
}

export default variables