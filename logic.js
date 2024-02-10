let emailInput = document.getElementById('iemail');
let button = document.getElementById('ibutton');
let form = document.querySelector('form');
let span = document.querySelector('span');
let content = document.getElementById('all');
let thanks = document.getElementById('thanks')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(emailInput.value == "" || IsEmailValid(emailInput.value) == false){
        emailInput.style.borderColor = 'red';
        span.style.color = 'red';
        span.style.display = 'block';
    } else {
        content.style.display = 'none';
        thanks.style.display = 'block';
    }


    function IsEmailValid(email){
        const emailValid = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

        if(emailValid.test(email)){
            return true;
        } else {
            return false;
        }
    }
});