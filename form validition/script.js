const form = document.querySelector(".container");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// showError message
function  showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}


// showsuccess message 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


// Email valid message 
function  isEmailValid(email) {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    return  re.test(String(email).toLowerCase());
   
}

 function checkPasswordmatch(input1,input2){
    if(input1.value !== input2.value){
      showError(input2,`passwords does not match`)
    }
 }

// Event listner 
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, "username is required");
    }else{
        showSuccess(username);
    }

     if(email.value === ''){
        showError(email,"Email is required");
    }else if(!isEmailValid(email.value)){
        showError(email,"Email is not valid");
}
    else{
        showSuccess(email);
    }

     if(password.value === ''){
        showError(password,"Password is required");
    }else{
        showSuccess(password);
    }

     if(password2.value === ''){
        showError(password2,"Password 2 is required");
    }else{
        showSuccess(password2);
    }

    checkPasswordmatch(password, password2);
});