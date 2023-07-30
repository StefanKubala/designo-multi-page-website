// HAMBURGER MENU VARIABLES
const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu")

// FORM VARIABLES
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");
const textareaInput = document.getElementById("textarea");
const btnForm = document.getElementById("form-submit");
const emptyErrorName = document.querySelector(".error-empty-name");
const emptyErrorEmail = document.querySelector(".error-empty-email");
const emptyErrorNumber = document.querySelector(".error-empty-number");
const emptyErrorText = document.querySelector(".error-empty-textarea");
const invalidEmail = document.querySelector(".error-email-invalid")


burger.addEventListener("click", function () {
    menu.classList.toggle("active");
})

// FORM VALIDATION
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnForm.addEventListener("click", function () {

    emptyErrorName.classList.remove("d-block")
    emptyErrorEmail.classList.remove("d-block")
    emptyErrorNumber.classList.remove("d-block")
    emptyErrorText.classList.remove("d-block")
    invalidEmail.classList.remove("d-block");

    if (nameInput.value.length === 0) {
        emptyErrorName.classList.add("d-block")
    } else if (emailInput.value.length === 0) {
        emptyErrorEmail.classList.add("d-block");
    } else if (!emailInput.value.match(validRegex)) {
        invalidEmail.classList.add("d-block");
    } else if (numberInput.value.length === 0) {
        emptyErrorNumber.classList.add("d-block")
    } else if (textareaInput.value.length === 0) {
        emptyErrorText.classList.add("d-block")
    }
})