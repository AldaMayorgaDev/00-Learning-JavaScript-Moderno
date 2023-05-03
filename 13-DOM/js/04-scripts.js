/**QerySelector 
 * REtorna solo un elemento, es decir si hay dos del mismo, regresa el primero que encontro
*/

const card = document.querySelector('.card'); //el primer elemento que tenga la clase card

console.log('card', card);



//Se puede tener selectores especificos como CSS

const info = document.querySelector('.premium .info');
console.log('info', info)

//Selecionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log('segundoCard', segundoCard);


//Seleccionar elemento con id formulario como en CSS

const formulario = document.querySelector('#formulario');
console.log('formulario', formulario)


//Seleccionar elementos HTML para
const navegacion = document.querySelector('nav');
console.log('navegacion', navegacion)