const navegacion = document.querySelector('nav');
console.log('navegacion', navegacion);
console.log('navegacion.childNodes', navegacion.childNodes); //Los Espacios en Blanco (enters en el HTML) son cosiderados elementos

console.log('navegacion.children', navegacion.children); //Este solo muestra elementos HTML en un HTMLCollection como arreglo

//Para acceder a un nodo se accede como un arreglo
console.log('navegacion.children[1]', navegacion.children[1]);

/**
 * nodeType
 *      nodeType muestra el tipo de nodo que es:
 *          Elemento HTML => 1
 *          Atributo => 2
 *          Texto => 3
 *          Comentario => 8
 * 
 */

console.log('navegacion.children[1].nodeType', navegacion.children[1].nodeType);



/**
 *  nodeName
 *      Devuelve el nombre del nodo actual, en forma de cadena.
 * 
 */

 console.log('navegacion.children[1].nodeName', navegacion.children[1].nodeName);





 /**
  * Traversing del DOM
  * 
  *     Ir recorriendo el DOM encontrando el camino sobre los nodos e hijos 
  */

const card = document.querySelector('.card');
console.log('card.children[1].children', card.children[1].children);

//Caminando el texto de una card usando Traversing del DOM

const card1= document.querySelector('.card');
card1.children[1].children[1].textContent = 'Texto desde traversing del DOM'
console.log('card1', card1.children[1].children[1].textContent);


//Caminando la iamgen de la card usando Traversing del DOM
const cardUno = document.querySelector('.card');
cardUno.children[0].src = 'img/newyork4.jpg';
console.log('cardUno', cardUno.children[0])


/**
 * Traversing de DOM de hijo a padre
 *      en lugar de children se ocupa parentElement
 */


console.log('cardUno.parentNode', cardUno.parentElement.parentElement.parentElement); 


/**
 * Traversing de DOM de hermanos
 *      .nextElementSibling =>Hermano a la derecha
 *      .previousElementSibling =>Hermano a la izquierda
 *      
 */


 console.log('cardUno.nextElementSibling', cardUno.nextElementSibling); 


 /**
  * Hermano a la izquierda
  */

 const ultimoCard = document.querySelector('.card:nth-child(4)');
 console.log('ultimoCard', ultimoCard.previousElementSibling);


 /**
  * Primer Elemento .fistElementChild
  * Ultimo Elemento .lastElementChild
  */