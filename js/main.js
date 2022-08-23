
let menu = document.getElementById('menu')

let altura = menu.offsetTop

window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura){
        menu.classList.add('fixed')
    } 

    else{
        menu.classList.remove('fixed')
    }
})

const buttonAdd = document.querySelectorAll('.button-add')

for (let i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener('click', notification)
}

function notification() {
    Toastify({
        text: "Agregado correctamente",
        className: "info",
        style: {
            background: "linear-gradient(to right, blue, white)",
            color: "black"
        },
        duration: 2500,
        stopOnFocus: true,
        close: true
    }).showToast();
    
}
