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

/******************************
 * 
 * .map() con arrow function
 * 
 * const nombreVariableQueGuardaElResultadoDeMap = nombreArreglo.map((parametro)=>`lo que devuleve`)
 */

const nuevoArrelo = carrito.map((producto)=> `${producto.nombre} - ${producto.precio}`);

console.log('.map', nuevoArrelo);


/********
 *  forEach con arrow function
 * 
 *  nombreArreglo.forEach((parametro)=>`lo que devuleve`)
 */

carrito.forEach((elemento)=>{
    console.log(`${elemento.nombre} - ${elemento.precio}`);
})