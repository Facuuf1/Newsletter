const btnSuccess = document.getElementById("btn-subscribe");
const btnDissmiss = document.getElementById("btn-dissmiss");
const container = document.querySelector (".container");
const containerSuccess = document.querySelector(".container-success");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");




email.addEventListener("keyup", ()=>{
    validateEmail()
});

function validateEmail(){

    const emailRegex =/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ;
    if(email.value == 0){
        errorMessage.innerHTML = "Email required";
        email.classList.add("active-error")
        return false;
    }
    if(!email.value.match(emailRegex)){
        errorMessage.innerHTML = "Valid email required";
        email.classList.add("active-error")
        return false;

    }else{
        errorMessage.innerHTML = "";
        email.classList.remove("active-error")
        return true;
    }

}

btnSuccess.addEventListener("click", (e) => {
    e.preventDefault();
     
     if(!validateEmail()){

     }else{
        containerSuccess.classList.remove("active")
        container.classList.remove("no-active")
        container.classList.add("active")
        containerSuccess.classList.add("no-active")
         
        
     }
     successTxt();
})

btnDissmiss.addEventListener("click",()=>{
    container.classList.remove("active")
    containerSuccess.classList.remove("no-active")
    containerSuccess.classList.add("active")
    container.classList.add("no-active")
     
    if(email.value != ""){
        email.value = ""
    }
   
});

function successTxt(){

    const success = document.querySelector(".info-success");
    const grupoSuccess = document.querySelector(".grupo-succees");
    
    success.innerHTML = `<h1>Thanks for subscribing!</h1>
    <p>A confirmation email has been sent to <span>${email.value}</span>. 
    Please open it and click the button inside to confirm your subscription.</p>`
    
    grupoSuccess.appendChild(success)
}

