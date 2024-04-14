let confirmPassword = document.getElementById("confirmPassword")
let password = document.getElementById("password")
let button = document.getElementById("submitButton")

let pass1= ''
let pass2= ''

password.addEventListener("keyup",(e)=>{
    pass1=password.value
    password.style.borderColor=""
    confirmPassword.style.borderColor=""
})
confirmPassword.addEventListener("keyup",(e)=>{
    pass2=confirmPassword.value
    password.style.borderColor=""
    confirmPassword.style.borderColor=""
})
button.addEventListener("click",()=>{
    console.log(pass1)
    console.log(pass2)
    if(pass1!=pass2){
        console.log("they don't match")
        password.style.borderColor="red"
        confirmPassword.style.borderColor="red"
        alert('passwords dont match')
        
    }
    else{
        console.log("nah")
    }
})
