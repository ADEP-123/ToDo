import compTaskFromPom from "./compTaskFromPom.js";
import variables from "./variables.js";

const resumeCronometro = () => {
    let divCron = document.querySelector("#cronometro");
    const numeros = divCron.innerHTML.replace(/\s/g, '').split(':');
    let min = parseInt(numeros[0], 10);
    let seg = parseInt(numeros[1], 10);
    if (variables.cronStatus == true) {
        const taskSelect = document.querySelector("#selectTaskPom")
        const numbTask = taskSelect.value
        const element = document.querySelector('#taskList').querySelectorAll('li')[numbTask - 1].querySelectorAll('i')[0]
        if (element.className == "far fa-circle") {
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
                    variables.changeCronStatus(false)
                    compTaskFromPom(element)
                    // document.querySelector("#robotStatus").setAttribute("src", "img/restingReobot.gif")
                }
            }
            divCron.innerHTML = time
        } else {
            alert("La tarea elegida no puede estar terminada")
            variables.changeCronStatus(false)
            // document.querySelector("#robotStatus").setAttribute("src", "img/restingReobot.gif")
        }
    }
    else {
        if (document.querySelector("#robotStatus").getAttribute("src") == "img/workingRobot.gif") {
            document.querySelector("#robotStatus").setAttribute("src", "img/restingReobot.gif")
        }
        return
    }

}
export default resumeCronometro