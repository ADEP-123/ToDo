import variables from "./variables.js";

const resumeCronometro = () => {
    let divCron = document.querySelector("#cronometro");
    const numeros = divCron.innerHTML.replace(/\s/g, '').split(':');
    let min = parseInt(numeros[0], 10);
    let seg = parseInt(numeros[1], 10);
    if(variables.cronStatus == true){
        seg--
        if (seg < 0) {
            seg = 60
            min--
        }
        let time = `${min} : ${seg}`
        divCron.innerHTML = time
    }
    else{
        return
    }
    
}
export default resumeCronometro