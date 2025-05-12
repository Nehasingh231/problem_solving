const usernameElm = document.getElementById("username");
const emailElm = document.getElementById("email");
const passwordElm = document.getElementById("password");
const messElm = document.getElementById("message");

function validateForm(){
    const username = usernameElm.value.trim();
    const email = emailElm.value.trim();
    const password = passwordElm.value.trim();
    console.log(username, email, password);

    if(username === ""){
       messElm.innerText = "please Enter a Username"
    } else if (!email.includes("@")){
        messElm.innerText = "please Enter a valid Email"
    } else if(password.length < 6) {
        messElm.innerText = "please Enter a Password with at least 6 characters"
    }else{
        messElm.innerText = "Form Submitted Successfully"
        

        // Clear Form Inputs
        usernameElm.value = "";
        emailElm.value = "";
        passwordElm.value = "";
    }
}