import throttle from 'lodash.throttle';
let throttle = require('lodash.throttle');


const form = document.querySelector(".feedback-form")
const email = document.querySelector("input")
const message = document.querySelector("textarea")
const submit = document.querySelector(".submit-btn")
console.log(email)


form.addEventListener('input', checkForm)


window.addEventListener('DOMContentLoaded', function () {
    const saveValueOfInput = this.localStorage.getItem("email");
    const saveValueOfMessage = this.localStorage.getItem("message")
    if (saveValueOfInput !== null) {
        email.value = JSON.parse(saveValueOfInput)
    }
    if (saveValueOfMessage !== null) {
        message.value = JSON.parse(saveValueOfMessage)
    }
})

function checkForm(evt) {
    evt.preventDefault()
    
    const valueToSaveInput = email.value
    
    const valueToSaveMessage = message.value
    localStorage.setItem("email", JSON.stringify(valueToSaveInput))
    localStorage.setItem("message", JSON.stringify(valueToSaveMessage))
}

// form.addEventListener("click", clickHandler)
    

    

