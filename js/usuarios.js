const body = document.querySelector('body')

body.innerHTML = `<div class="container-form sign-up">
                     <div class="welcome-back">
                         <div class="message">
                             <h2>Bienvenido a LimpiaMax!</h2>
                             <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                             <button class="sign-up-btn">Iniciar Sesion</button>
                         </div>
                     </div>
                     <form class="formulario product-container" id="form">
                         <h2 class="create-account">Crear una cuenta</h2>
                         <div class="iconos">
                             <div class="border-icon">
                                 <i class='bx bxl-instagram'></i>
                             </div>
                             <div class="border-icon">
                                 <i class='bx bxl-linkedin' ></i>
                             </div>
                             <div class="border-icon">
                                 <i class='bx bxl-facebook-circle' ></i>
                             </div>
                         </div>
                         <p class="cuenta-gratis">Crear una cuenta gratis</p>
                         <input type="text" placeholder="Nombre" id="name">
                         <input type="email" placeholder="Email" id="email">
                         <input type="password" placeholder="Contraseña" id="password">
                         <input type="submit" value="Registrarse">
                         <p class="warnings" id="warnings"></p>
                         <a href="../index.html"><input type="button" value="Volver al inicio"></a>
                     </form>
                     </div>
                     <div class="container-form sign-in">
                     <form class="formulario" id="formDos">
                         <h2 class="create-account">Iniciar Sesion</h2>
                         <div class="iconos">
                             <div class="border-icon">
                                 <i class='bx bxl-instagram'></i>
                             </div>
                             <div class="border-icon">
                                 <i class='bx bxl-linkedin' ></i>
                             </div>
                             <div class="border-icon">
                                 <i class='bx bxl-facebook-circle' ></i>
                             </div>
                         </div>
                         <p class="cuenta-gratis">¿Aun no tienes una cuenta?</p>
                         <input type="email" placeholder="Email" id="emailDos">
                         <input type="password" placeholder="Contraseña" id="passwordDos">
                         <input type="submit" value="Iniciar Sesion">
                         <p class="warnings" id="warningsDos"></p>
                         <a href="../index.html"><input type="button" value="Volver al inicio"></a>
                     </form>
                     <div class="welcome-back">
                         <div class="message">
                             <h2>Bienvenido de nuevo</h2>
                             <p>Si aun no tienes una cuenta por favor registrese aqui</p>
                             <button class="sign-in-btn">Registrarse</button>
                         </div>
                     </div>
                 </div>`

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

