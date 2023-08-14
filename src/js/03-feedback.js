import throttle from 'lodash.throttle';

const STORAGE_DATA = 'feedback-form-state';

const form = document.querySelector("form");
const input = document.querySelector("input");
const message = document.querySelector("textarea");

const dataForm = {};

checkForm();

form.addEventListener('input', throttle(formOutput, 500));

function formOutput(event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_DATA, JSON.stringify(dataForm));
    console.log(dataForm);
}

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_DATA);
    input.value = '';
    message.value = '';

    console.log(dataForm);
}

function checkForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_DATA))
    if(savedMessage){
        input.value = savedMessage.email
        message.value = savedMessage.message
    }
}






