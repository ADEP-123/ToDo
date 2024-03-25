import variables from "./variables.js";

const setDate = () => {
    const newFecha = variables.fechaActual;
    variables.fecha.innerHTML = newFecha.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' })
}
export default setDate
