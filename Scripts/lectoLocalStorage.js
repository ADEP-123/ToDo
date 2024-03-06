const lectorLS = () => {
    const data = JSON.parse(localStorage.getItem("ToDo"))
    if (data) {
        document.querySelector("#userNameInput").value = data[0]
        return data
    } else {
        return
    }

}
export default lectorLS