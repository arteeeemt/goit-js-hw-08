import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle')

const STORAGE_KEY = 'feedback-form-state';
const STORAGE_DATA = JSON.parse(localStorage.getItem(STORAGE_KEY))

const form = document.querySelector("form");
const input = document.querySelector("input");
const message = document.querySelector("textarea");


form.addEventListener('input',throttle(dataFormSave,500))

if(STORAGE_DATA){
    form.elements.email.value = STORAGE_DATA.value
    form.elements.message.value = STORAGE_DATA.message
}


function dataFormSave(){
    const data = {
        email:form.elements.email.value,
        message:form.elements.message.value
    }
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
}

document.addEventListener("DOMContentLoaded", function() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        form.elements.email.value = savedData.email || '';
        form.elements.message.value = savedData.message || '';
    }

    form.elements.email.addEventListener('input', throttle(dataFormSave, 500));
    form.elements.message.addEventListener('input', throttle(dataFormSave, 500));

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        
        const formData = {
            email: form.elements.email.value,
            message: form.elements.message.value
        };
        console.log(formData);  
        form.reset();
    });
    
    
    if (savedData) {
        form.elements.email.value = savedData.email || '';
        form.elements.message.value = savedData.message || '';
    }
});













