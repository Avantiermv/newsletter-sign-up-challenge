let emailInput = document.getElementById('iemail');
let button = document.getElementById('ibutton');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(emailInput.value === ""){
        emailInput.style.borderColor = 'red';
        window.alert('error');
    } else {
        emailInput.style.borderColor = '';
        window.alert('Deu certo');
    }


    
});