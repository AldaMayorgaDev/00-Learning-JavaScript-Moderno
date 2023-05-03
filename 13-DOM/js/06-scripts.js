/**
 * Modificar Textos o Imagenes con JS
 */

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Accediendo al texto, existen tres formas:

console.log(encabezado.innerText); //Trae el texto, pero si en css tiene visibility: hidden no traera el texto
console.log(encabezado.textContent); //Trae el texto pero guardando espacios en blanco de mas, y no importa si tiene visibility: hidden
console.log(encabezado.innerHTML); //Trae el texto y el html

const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);


/**
 * Modifcar el texto desde js
 */

//Forma uno -> manual
 document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading desde JS';

//Forma dos -> variable
    const nuevoHeading= 'Texto desde variable'
 document.querySelector('.contenido-hero h1').textContent = nuevoHeading;



 /**Modificar una Imagen desde JS */
 const imagenCard1= document.querySelector('.contenedor-cards .card img');
 console.log(imagenCard1);

 imagenCard1.src = 'img/hacer2.jpg';




 //Ejercicio modificar titul rock en los Angeles de la segunda cards
 
 /*  const tituloCard2= document.querySelector('.contenedor-cards .card:nth-child(2) .info .titulo').textContent;

 console.log('tituloCard2', tituloCard2) */
 
    const evento = 'Festival Rock de los 80\'s LiveStream';
    document.querySelector('.contenedor-cards .card:nth-child(2) .info .titulo').textContent = evento;
