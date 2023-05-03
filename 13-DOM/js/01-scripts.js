let elemento;

elemento = document;
elemento = document.all; //Selecciona todos los elementos del html
elemento = document.head; //Muestra todo lo que hay en la tag <head>
elemento = document.body; //Muestra todo lo que hay en la tag <body>


elemento = document.domain; //Muestra el dominio en el que esta corriendo el html


elemento = document.forms; //Muestra todos los <form> que hay en el html
elemento = document.forms[0]; //Accede al indice 0 de todos los forms del html
elemento = document.forms[0].id; //Accede al id del primer form
elemento = document.forms[0].method; //Accede al meotod del primer form
elemento = document.forms[0].classList; //Devuelve un HTMLCollectio de todas las clases que tiene el primer form
elemento = document.forms[0].action; //Muestra el atributo action del primer form
elemento = document.links; //muestra todos los tags <link>
elemento = document.links[4];// Accede el 5 elemento link del html
elemento = document.links[4].classList; //Devuelve un HTMLCollectio de todas las clases que tiene 5o <link>
elemento = document.links[4].className; //DEculve las clses como string


elemento = document.images; //Devulve todas las etiquedas <img> del html
elemento = document.scripts; //Devulve todas las etiquetas <script> del html


console.log('elemento', elemento)