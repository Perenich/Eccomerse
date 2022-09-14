const header = document.querySelector('header')

header.innerHTML = `<nav class="navbar navbar-light bg-dark">
                       <div class="container">
                         <a class="navbar-brand" href="index.html">
                           <i class="fa-solid fa-cart-shopping bg-light"> E-COMMERCE</i>
                         </a>
                         <a class="navbar-brand" href="./seccion/usuarios.html">
                           <i class="fa-solid fa-user bg-light">Iniciar sesion</i>
                         </a>
                       </div>
                    </nav>`  
                    
const footer = document.querySelector('footer')        

footer.innerHTML = `<nav class="navbar navbar-light bg-dark">
                        <div class="container-fluid">
                          <span class="navbar-text">
                            Gracias por utilizar nuestro sitio! 
                          </span>
                        </div>
                    </nav>`
                    
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



let url = 'https://jsonplaceholder.typicode.com/photos'

let con=0

const main = document.querySelector('.main')

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((post) => {
        for (let i = 0; i < 20; i++) {
            main.innerHTML += `<article class="product">
                                    <div class="imagen">
                                        <img class="product-imagen" src="${post[con].thumbnailUrl}" alt="${post.title}">
                                    </div>
                                    <div class="descripcion">
                                    <p class="product-title">${post[con].title}</p>
                                    <h3 class="product-id">$ ${post[con].id}</h3>
                                    <button class="button-add notification">Comprar</button>
                                    </div>
                                </article>` 
            con+=1
            const buttonAdd = document.querySelectorAll('.button-add')
        
            for (let i = 0; i < buttonAdd.length; i++) {
                buttonAdd[i].addEventListener('click', notification)
            }

            
            function notification() {
                Toastify({
                    text: "Agregado correctamente",
                    className: "info",
                    style: {
                        background: "white",
                        color: "black"
                    },
                    duration: 2500,
                    stopOnFocus: true,
                    close: true
                }).showToast();
                
            }
            
        }
        const buttonAddCarrito = document.querySelectorAll('.button-add')
    
        buttonAddCarrito.forEach(addToCardButton => {
            addToCardButton.addEventListener('click', addToCardClicked)
        })

        const comprarButton = document.querySelector('.btnComprar')
        comprarButton.addEventListener('click', comprarButtonClicked)

        const carrito = document.querySelector('.carrito')

        function addToCardClicked(event){
            const button = event.target
            const product = button.closest('.product')

            const productTitle = product.querySelector('.product-title').textContent
            
            const productId = product.querySelector('.product-id').textContent
            
            const productImagen = product.querySelector('.product-imagen').src
       
          addItemToShoppingCart(productTitle, productId, productImagen)
        }

        function addItemToShoppingCart(productTitle, productId, productImagen){

            const elementTitle = carrito.getElementsByClassName('product-title')

            for (let i = 0; i < elementTitle.length; i++) {
                if (elementTitle[i].innerText === productTitle) {
                    let elementCantidad = elementTitle[i].parentElement.parentElement.querySelector('.buttonCantidad')

                    elementCantidad.value++

                    updateShoppingCartTotal()

                    return
                }
                
            }

            const shoppingCartRow = document.createElement('div')
            
            const shoppingCartContent = `<article class="productCard">
                                             <div class="imagen"">
                                                 <img class="product-imagen" src="${productImagen}" alt="imagen de 150 por 150">
                                             </div>                                             
                                              <div class="descripcionCardTitle">
                                                 <p class="product-title">${productTitle}</p>
                                              </div>
                                            <div class="descripcionCardId">
                                               <h3 class="product-id"> ${productId}</h3>                                              
                                            </div>
                                            <div>
                                               <input class="buttonCantidad" type="number" value="1">
                                            </div>
                                            <div>
                                               <button class="buttonDelete" type="button">X</button>
                                            </div>
                                         </article>`
            
            shoppingCartRow.innerHTML = shoppingCartContent
            carrito.append(shoppingCartRow)
            
            shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeProductCardItem)

            shoppingCartRow.querySelector('.buttonCantidad').addEventListener('change', productoCantidadChanged)


           updateShoppingCartTotal() 
        }

        function updateShoppingCartTotal(){
            let total = 0

            const productCartTotal = document.querySelector('.productCartTotal')
            
            const productCard = document.querySelectorAll('.productCard')


            productCard.forEach(productCard => {
              const productCardPrecioElement =  productCard.querySelector('.product-id')
              
              const productCardPrecio = Number( productCardPrecioElement.textContent.replace('$', ''))
              
              const productCardCantidadElement = productCard.querySelector('.buttonCantidad')

              const productCardCantidad = Number(productCardCantidadElement.value)
              

              total = total + productCardPrecio * productCardCantidad
            })

            productCartTotal.innerHTML = `${total}$`



        }

        function removeProductCardItem(event){
             const buttonClicked = event.target
             buttonClicked.closest('.productCard').remove()
             updateShoppingCartTotal()
        }


        function productoCantidadChanged(event){
            const input = event.target
            if (input.value <= 0) {
                input.value=1
            }
            updateShoppingCartTotal()
        }

        function comprarButtonClicked(){
            swal({
                title: "Gracias por su compra!",
                text: "Pronto recibira su pedido!",
                icon: "success",
              });
            carrito.innerHTML= ''
            updateShoppingCartTotal()
        }
        
    })

    
    
