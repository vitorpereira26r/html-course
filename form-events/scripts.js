function onSubmit(event){
    log.textContent = "Form Submitted!"
    event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log')

form.addEventListener('submit', onSubmit)