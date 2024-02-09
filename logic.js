let email = document.getElementById('iemail');
let button = document.getElementById('ibutton');
let form= document.querySelector('form');



form.addEventListener('submit', (e) => {

    if(email == ''){
        console.log('1');
    }

    e.preventDefault();
});