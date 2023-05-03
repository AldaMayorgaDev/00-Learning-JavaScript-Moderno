/* Higher-Order Functions // Funciones de orden superior */
/* Un higher order function es una funcion que toma o retorna una funcion como argumentoy básicamente la mayoria de los arrays methods son higher order functions */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

/* Supongamos que quisieramos obtener todos los productos que tengan un precio mayor a 400 */

const resultado = carrito.filter(producto =>{
    return producto.precio > 400;
})

console.log('resultado', resultado)

/* mismo ejemplo pero con Higher order function */

const mayor400 = producto =>{
    return producto.precio >400;
}

const resultadoFilter = carrito.filter(mayor400);
console.log('resultadoFilter', resultadoFilter)