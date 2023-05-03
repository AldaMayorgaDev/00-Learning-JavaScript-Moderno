/**
 * Propagacion de eventos Event Bubbling
 * Cuando un evento de un elemento padre, se activa en un elemento hijo
 * por ejemplo:
 *      <section>
 *             <div></div>
 *             <div></div>
 *      </section>
 * 
 * section tiene un evento
 * los div tiene un evento cada uno
 * 
 * entonces el event bubbling se presenta cuando quieres dar clic en un div hijo, como esta dentros e section, tambien despara su evento.
 *
 */


/**
 * Para detener la propagacion de eventos se debe pasar como argumento el evento dentro de la funcion, y ocupar
 *  evento.stopPropagation();
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', (event) =>{
    event.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', (e)=>{
    e.stopImmediatePropagation();
    console.log('click en info de card');
});

tituloDiv.addEventListener('click', (ev)=>{
    ev.stopPropagation();
    console.log('click en titulo de card');
});