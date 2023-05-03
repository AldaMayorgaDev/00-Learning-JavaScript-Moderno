/* Event loop, Modelo de concurrencia y loop de eeventos */
/* Eventos con mas prioridad que otros */

/* 
    1.- console.log() solitos (globales)
    2.- funciones
    3.- promises
    4.- setTimeOuts

*/
console.log('Primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise((resolve) => {
    resolve('Desconocido')
}).then(console.log);


console.log('ultimo');

function hola() {
    console.log('Hola');
}

hola()