class Tarea {
    constructor(nombre, id, realizado, eliminado) {
        this.nombre = nombre,
            this.id = id,
            this.realizado = realizado,
            this.eliminado = eliminado
    }
}
const variables = {
    userName: "",
    pomVarId:0,
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
    cronStatus:false,
    incrasePomVarId: function(){
        this.pomVarId = this.pomVarId +1
    },
    setUserName: function (newUsername) {
        if (this.list.length ===0){
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
    pushList: function (nombre, id, realizado, eliminado) {
        const nuevaTarea = new Tarea(nombre, id, realizado, eliminado)
        this.list.push(nuevaTarea)
    },
    changeCronStatus: function(){
        this.cronStatus = !this.cronStatus
    }
}

export default variables