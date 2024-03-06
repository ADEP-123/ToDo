import compTaskFromPom from "./compTaskFromPom.js";
import variables from "./variables.js";

const resumeCronometro = () => {
    const taskSelect = document.querySelector("#selectTaskPom")
    const numbTask = taskSelect.value
    const element = document.querySelector('#taskList').querySelectorAll('li')[numbTask - 1].querySelectorAll('i')[0]
    let divCron = document.querySelector("#cronometro");
    const numeros = divCron.innerHTML.replace(/\s/g, '').split(':');
    let min = parseInt(numeros[0], 10);
    let seg = parseInt(numeros[1], 10);
    if (variables.cronStatus == true) {
        if (element.className == "far fa-circle") {
            document.querySelector("#robotStatus").setAttribute("src", "img/workingRobot.gif")
            seg--
            if (seg < 0) {
                seg = 60
                min--
            }
            let time = `${min} : ${seg}`
            if (min < 10) {
                time = `0${min} : ${seg}`
            }
            if (seg < 10) {
                time = `${min} : 0${seg}`

            }
            if (min < 10 && seg < 10) {
                time = `0${min} : 0${seg}`
                if (min == 0 && seg == 0) {
                    time = `25 : 00`
                    variables.changeCronStatus()
                    compTaskFromPom(taskSelect, numbTask, element)

                }
            }
            divCron.innerHTML = time
        } else {
            alert("La tarea elegida no puede estar terminada")
            variables.changeCronStatus()
        }
    }
    else {
        return
    }

}
export default resumeCronometro