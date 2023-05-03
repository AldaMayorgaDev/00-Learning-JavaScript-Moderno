/**
 * Cambiando CSS desde JS
 */

/* const encabezado = document.querySelector('.hero .contenido-hero h1');
console.log('encabezado.style', encabezado.style)

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase'; */


/**
 * Agregar Clases
 */


const card1 = document.querySelector('div .card');
card1.classList.add('nueva-clase', 'segunda-clase'); //Añadir clases
card1.classList.remove('nueva-clase'); //Eliminar una clase
console.log('card1', card1.classList);