// AJAX Method == POST
var account = document.querySelector('#account-id');
var password = document.querySelector('#password-id');
var register = document.querySelector('#register-id');
var login = document.querySelector('#login-id');
var display = document.querySelector('#display-id');
// ======>>
register.addEventListener('click', function (event) {
    apiJSON('https://hexschool-tutorial.herokuapp.com/api/signup');
}, false)
login.addEventListener('click', function (event) {
    apiJSON('https://hexschool-tutorial.herokuapp.com/api/signin');
}, false)

function apiForm(url) {
    // Only need this when we are using a form to send.
    event.preventDefault();
    var accountSend = account.value;
    var passwordSend = password.value;
    var request = new XMLHttpRequest();
    request.open('post', url, true);
    // This request header format and send data follow what back end developer requires, usually is JSON.
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('email=' + accountSend + '&password=' + passwordSend);
    request.onload = function () {
        var callBackData = JSON.parse(request.response);
        if (request.readyState == 4 && request.status == 200) {
            if (callBackData.success == true) {
                // Notice that the reponse becomes an object after JSON parsing, so we can only get its key after parsing.
                display.textContent = callBackData.message;
            } else if (callBackData.success == false) {
                display.textContent = "You dumb ass."
                // Enable this when the server does reply error message.
                // display.textContent = callBackData.message;
            }

        } else {
            display.textContent = "The request didn't send out";
        }
    }
}

function apiJSON(url) {
    // Only need this when we are using a form to send.
    event.preventDefault();
    var accountSend = account.value;
    var passwordSend = password.value;
    var info = {
        email: accountSend,
        password: passwordSend,
    };
    var infoSend = JSON.stringify(info);
    var request = new XMLHttpRequest();
    request.open('post', url, true);
    // This request header format and send data follow what back end developer requires, usually is JSON.
    request.setRequestHeader('Content-type', 'application/json');
    request.send(infoSend);
    request.onload = function () {
        var callBackData = JSON.parse(request.response);
        if (request.readyState == 4 && request.status == 200) {
            if (callBackData.success == true) {
                // Notice that the reponse becomes an object after JSON parsing, so we can only get its key after parsing.
                display.textContent = callBackData.message;
            } else if (callBackData.success == false) {
                console.log(callBackData);
                display.textContent = "You dumb ass."
                // Enable this when the server does reply error message.
                // display.textContent = callBackData.message;
            }
        } else {
            display.textContent = "The request didn't send out";
        }
    }
}
// <<======