/**
 * querySelectorAll() 
 * Es lo mismo que querySelector(), solo que este si regresa todos los elementos del tipo que buscamos. Los devuelve a en un NodeList que es una especie de arreglo
 */

/**
 * const variableQueGuardara = document.querySelectorAll('elementoABuscar');

el elemento a buscar puede ser tag, #id, .class o la combinacion de estos slectores como en CSS
*/

const cards = document.querySelectorAll('div.card');
console.log('cards', cards);

//Si un elemento no existe =>>devulve un NodeList vacio []

const noExiste = document.querySelectorAll('noexiste');
console.log('noExiste',noExiste);