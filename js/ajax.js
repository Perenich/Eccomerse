const main = document.querySelector('.main')
let url = 'https://rickandmortyapi.com/api/character' 
//url es el ENDPOINT ! 

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        let personajes = json.results

        personajes.forEach(personaje => {
            const {name, image, species} = personaje
            
            main.innerHTML += `<article class="product">
                                    <div class="imagen">
                                        <img src="${image}" alt="${name}">
                                    </div>
                                    <div class="descripcion">
                                        <h3>${name}</h3>
                                        <p>${species}</p>
                                    </div>
                                </article>`
        })
    })
