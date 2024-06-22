const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const nameValid = document.getElementById('nameValid');
const emailValid = document.getElementById('emailValid');
const messageValid = document.getElementById('messageValid');

const namePattern = /^[a-zA-Z\s]{2,}(?: [a-zA-Z\s]+){1,}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateName() {
    const name = nameInput.value.trim();
    if (name === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        nameValid.style.display = "none";
        return false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Please enter your full name (first and last name).";
        nameError.style.display = "block";
        nameValid.style.display = "none";
        return false;
    } else {
        nameError.style.display = "none";
        nameValid.style.display = "block";
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        emailValid.style.display = "none";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "block";
        emailValid.style.display = "none";
        return false;
    } else {
        emailError.style.display = "none";
        emailValid.style.display = "block";
        return true;
    }
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message === "") {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        messageValid.style.display = "none";
        return false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        messageError.style.display = "block";
        messageValid.style.display = "none";
        return false;
    } else {
        messageError.style.display = "none";
        messageValid.style.display = "block";
        return true;
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        alert("Form submitted successfully!");
        // You can perform AJAX request or any other processing here
        document.getElementById('contactForm').reset();
        nameValid.style.display = "none";
        emailValid.style.display = "none";
        messageValid.style.display = "none";
    }
});
