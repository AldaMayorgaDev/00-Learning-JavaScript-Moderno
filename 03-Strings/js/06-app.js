const producto = 'Monitor 20 pulgadas';

/* 
    Método .repeat();
        nombreString.repeat(numeroDeVecesARepetir);
    Permite repetir una cadena de texto     
*/

const texto = ' en Promocion'.repeat(3);

console.log('Método .repeat(): ', texto);
console.log('Método .repeat():' , producto.repeat(4));


/*
    Metodo .split()
        nombreString.split("criterioABuscarParaDividir");
    Permite dividir un string de acuerdo aun criterio en particualar
*/

const actividad= 'Estoy aprendiendo JavaScript Moderno';
console.log('Metodo .split(), criterio Espacios: ', actividad.split(' '));

console.log('Metodo .split(), criterio a: ', actividad.split('a'));

const hobbies= 'Leer, Jugar, Dibujar, Caminar, Programar'
console.log('Metodo .split(), criterio ,: ', hobbies.split(', '));