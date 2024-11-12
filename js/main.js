const apiUrl = 'https://api.api-onepiece.com/v2/characters/en/'
const $section = document.querySelector('.container')
const $loader = document.querySelector('#loader');

const mostrarDatos = (name, posicion, age, bounty, fruit, status) =>{
    const nombre = document.createElement('h2')
    const cargo = document.createElement('p')
    const fruta = document.createElement('p')
    const recompensa = document.createElement('p')
    const edad = document.createElement('p')
    const estado = document.createElement('p')
    const article = document.createElement('article')

    nombre.innerHTML = name
    cargo.innerHTML = posicion
    fruta.innerHTML = fruit
    edad.innerHTML = `Age: ${age}`
    recompensa.innerHTML = `Bounty: $${bounty}`
    estado.innerHTML = `Status: ${status}`

    article.classList.add("character")

    article.appendChild(nombre)
    article.appendChild(cargo)
    article.appendChild(fruta)
    article.appendChild(edad)
    article.appendChild(recompensa)
    article.appendChild(estado)

    $section.appendChild(article)
    
    article.addEventListener("click", () =>{
        window.location.href = `details.html?nombre=${name}&cargo=${posicion}&fruta=${fruit}&edad=${age}&recompensa=${bounty}&estado=${status}`
    })
}

async function onePiceCharacters() {
    try {
        $loader.classList.add("loader")
        const response = await fetch(apiUrl)
        const result = await response.json()
        for (let i = 0; i < 10; i++) {
           const {name, job, fruit, bounty, age, status} = result[i]

            if(result[i].fruit){
                mostrarDatos(name, job, age, bounty, fruit.name, status)
            }else{
                
                mostrarDatos(name, job, age, bounty, "I don't have fruit", status)
            }

            
        }

    } catch (error) {
        console.error(error)
    } finally{
        $loader.classList.remove("loader")
    }
}

onePiceCharacters()

