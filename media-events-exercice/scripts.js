const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        event.target.classList.add('purple-border');
    });

    input.addEventListener('blur', (event) => {
        event.target.classList.remove('purple-border');
    });

    input.addEventListener('input', (event) => {
        console.log(`Value updated: ${event.target.value}`);
    });
});

function onSubmit(event){
    //window.localStorage.setItem('name', form.elements['name'].value)
    console.log(form.elements['name'].value)
    event.preventDefault();
}

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit)