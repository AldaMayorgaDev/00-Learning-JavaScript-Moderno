/**
 * forEach
 * Ideal para reccorer arreglos, va a ejecutarse al menos una vez por cada vez que haya elementos en el arreglo
 * 
 * es decir, si en arreglo hay 20 elementos, se ejecutara 20 veces
 */

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

/* NombreArreglo.forEach((elemento)=>{codigoARealizarPorCadaElementos})) */

pendientes.forEach((pendiente, indice)=>{
    console.log('indice:',indice, 'pendiente: ', pendiente, '✔' );
});

const carrito =[
    {nombre: 'Monitor 27 pulgadas', precio: 5000},
    {nombre: 'Smart TV 32\"', precio: 1000},
    {nombre: 'Camara Web logithec', precio: 890},
    {nombre: 'Disco duro SSD 128GB', precio: 1000},
    {nombre: 'USB 500GB', precio: 399},
    {nombre: 'PC Gamer', precio: 14000},
    {nombre: 'MousePad apple', precio: 5999},
    {nombre: 'Laptop i3 ', precio: 7000},
    {nombre: 'Mouse', precio: 350}
];

const arrayForEach = carrito.forEach((articulo)=>articulo.nombre);

/***
 * .map() 
 * map crea un array nuevo y forEach no crea un arreglo nuevo
 */

const arrayMap = carrito.map((producto) =>{
    return producto.nombre
});

console.log('arrayForEach', arrayForEach);
console.log('arrayMap', arrayMap);