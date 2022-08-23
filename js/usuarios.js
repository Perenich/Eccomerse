const btnSignIn= document.querySelector('.sign-in-btn'),
      btnSignUp = document.querySelector('.sign-up-btn'),  
      signUp = document.querySelector('.sign-up'),
      signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === btnSignIn || e.target === btnSignUp) {
        signIn.classList.toggle('active');
        signUp.classList.toggle('active')
    }
});

const nombre = document.getElementById('name')
const email = document.getElementById('email')
const pass = document.getElementById('password')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit", e=>{
    e.preventDefault()

    let warnings = ""
    let ingresar = false

    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        ingresar = true
    }
    if (email.value.length <12) {
        warnings += `El email no es valido <br>`
        ingresar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valido`
        ingresar = true
    }
    if (ingresar) {
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Enviado"
    }

})

const emailDos = document.getElementById('emailDos')
const passDos = document.getElementById('passwordDos')
const formDos = document.getElementById('formDos')
const parrafoDos = document.getElementById('warningsDos')

formDos.addEventListener("submit", e=>{
    e.preventDefault()

    let warnings = ""
    let ingresar = false

    if (emailDos.value.length <12) {
        warnings += `El email no es valido <br>`
        ingresar = true
    }
    if(passDos.value.length < 8){
        warnings += `La contraseña no es valido`
        ingresar = true
    }
    if (ingresar) {
        parrafoDos.innerHTML = warnings
    }
    else{
        parrafoDos.innerHTML = "Enviado"
    }

})

