/* Async y await hacia una API utilizando Fetch */

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

/* function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log('resultado', resultado))
        .catch(error => console.log('El error es:', error))
} */

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url); //Bloquea la ejecutcion y espera a que se haga el fetch a la url, esa respuesta lo guarda en la variable respeusta
        console.log('respuesta', respuesta)
        const resultado = await respuesta.json() //Bloque la ejecucuon e indicamos en que formato se requiere la respeusta, en este caso como JSON, lo guarda en resultado
        console.log('resultado', resultado)

    } catch (error) {
        console.log('error', error)
    }
    
}