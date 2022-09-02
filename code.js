const passP1 = document.querySelector("#password1");
const passP2 = document.querySelector("#password2");
const passwordInvalid = document.querySelector(".passInvalid")

passP1.addEventListener("input", function(){
    if(passP1.textContent == passP2.textContent){passwordInvalid.style.opacity = "0";}
    else{
        passwordInvalid.style.opacity = "1.0";
    }
})
passP2.addEventListener("input", function(){
    if(passP2.value == passP1.value){passwordInvalid.style.opacity = "0";}
    else{
        passwordInvalid.style.opacity = "1.0";
    }
})