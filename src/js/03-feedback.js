// import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle')

// const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_DATA = JSON.parse(localStorage.getItem(STORAGE_KEY))

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const message = document.querySelector("textarea");


// form.addEventListener('input',throttle(dataFormSave,500))

// if(STORAGE_DATA){
//     form.elements.email.value = STORAGE_DATA.value
//     form.elements.message.value = STORAGE_DATA.message
// }


// function dataFormSave(){
//     const data = {
//         email:form.elements.email.value,
//         message:form.elements.message.value
//     }
//     localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
// }

// form.addEventListener('submit',function(evt){
//     if (email.value === '' || message.value === ''){
//         return alert('Заполните все поля!')
//     }
//     evt.preventDefault()
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
//     form.reset()
//     localStorage.removeItem(STORAGE_KEY)
// })


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
        if (form.elements.email.value === '' && form.elements.message.value === '') {
            return alert('Заповніть усі поля!');
        }
        const formData = {
            email: form.elements.email.value,
            message: form.elements.message.value
        };
        console.log(formData);  // Выводим данные в консоль
        form.reset();
    });
    
    // После загрузки страницы, принудительно установите значения полей формы из localStorage
    if (savedData) {
        form.elements.email.value = savedData.email || '';
        form.elements.message.value = savedData.message || '';
    }
});













