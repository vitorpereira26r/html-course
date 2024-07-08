function save(name){
    window.sessionStorage.setItem("name", name)
}

document.getElementById('name').addEventListener('blur', (event) => {
    save(event.target.value);
})

document.getElementById('local').addEventListener('blur', (event) => {
    window.localStorage.setItem('local', event.target.value);
})