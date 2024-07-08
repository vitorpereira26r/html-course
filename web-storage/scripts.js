function save(name){
    window.sessionStorage.setItem("name", name)
}

document.getElementById('name').addEventListener('blur', (event) => {
    save(event.target.value);
})