
/**Crear un nuevo enlace
 *      createElement('ElementoACrear');
 * 
 */

const enlace = document.createElement('a');

//Agregandole  texto
enlace.textContent= 'Nuevo Enlace';

//Agregandole href
enlace.href= 'http://google.com.mx';

//Agregandole target
enlace.target= '_blank';


console.log('enlace', enlace)


/**Mostrando el elemento 
 * 
 * 1) Selecionar o definir el contenedor
 * 2) Agregar el elemento al contenedor hay dos formas: 
 *      2.1) con appendChild para agregarlo al ultimo
 *          contendor.appendChild(ElementoCreado)
 *      2.2) con insertBefore para agregarlo antes de x elemento
 *          contendor.insertBefore( ElementoCreado, ElementoReferencia)
*/


const navegacion = document.querySelector('.navegacion'); //1)
navegacion.appendChild(enlace); //2.1

console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); //2.2




/**
 * EJERCICIO:
 * Crear un card en forma dinamica
 *  */

const parrafo1 = document.createElement('p');
parrafo1.classList.add('categoria', 'concierto');
parrafo1.textContent = 'Concierto';

const parrafo2 = document.createElement('p');
parrafo2.classList.add('titulo');
parrafo2.textContent = 'The Killers World Tour 2023®';

const parrafo3 = document.createElement('p');
parrafo3.classList.add('precio');
parrafo3.textContent = '$2300 Zona VIP';


console.log('parrafo1 :>> ', parrafo1);


//creacion de contendor div con la clase info

const info = document.createElement('div');
info.classList.add('info');

//Agregar los 3 parrafos al div 
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log('info', info.children);

//crear la imagen
const imagen = document.createElement('img');
imagen.classList.add('imagen', 'img-fluid');
imagen.src= 'img/newyork3.jpg';
imagen.alt = 'Imagen de new york';

console.log('imagen', imagen)

//crear div card

const card = document.createElement('div');
card.classList.add('card');

//Asignar la Imagen
card.appendChild(imagen);
card.appendChild(info);

console.log('card', card);

//Mostrar la card en el html

//Sellecionar el contendor final
const contenedor = document.querySelector('.hacer .contenedor-cards');
console.log('contenedor', contenedor);

//Agregar card al contendor al final
contenedor.appendChild(card);

//Agregar card al contendor al inicio

contenedor.insertBefore(card, contenedor.firstChild);