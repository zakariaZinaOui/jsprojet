var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmation = document.getElementById("confirmation")

var username_error = document.getElementById("username_error")
var email_error = document.getElementById("email_error")
var password_error = document.getElementById("password_error")
var confirmation_error = document.getElementById("confirmation_error")


function in_range(num, min, max) {
    if (num < min || num > max) {
        return true
    }
    return 0
}


function empty(input) {
    if (input.value = "") {
        return true
    }
    return false
}


function success(div, error_small) {

    div.classList.remove("error");
    div.classList.add("success");
    error_small.textContent = ""

}

function error(div, error_small, message) {

    div.classList.remove("success");
    div.classList.add("error");
    error_small.textContent = message

}


function check_username() {

    if (username.value.length > 25 || username.value.length < 3) {
        error(username, username_error, "No more than 25 characters and no less than 3")
        return false
    } else {
        success(username, username_error)
        return true
    }

}


function check_email() {

    if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))) {
        error(email, email_error, "Invalid email format")
        return false
    } else {
        success(email, email_error)
        return true
    }

}


function check_password() {

    if (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value))) {
        error(password, password_error, "Password must be 8 chars long, one uppercase, one lowercase and a special character")
        return false
    } else {
        success(password, password_error)
        return true
    }

}

function check_confirmation() {
    if (password.value !== confirmation.value || confirmation.value.length == 0) {
        error(confirmation, confirmation_error, "Passwords did not match")
        return false
    } else {
        success(confirmation, confirmation_error)
        return true
    }
}


function validate() {

    var valid = true

    if (!check_username() | !check_email() | !check_password() | !check_confirmation()) {
        valid = false
    }

    if (valid) {
        console.log("I am good");
        window.location.href = "index.html";
    }

}