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

/* Ejemplo, queremos crrear un arreglo basado en el mismo arreglo que tenemos, pero solo que enliste nombre de los productos */

const obtenerNombres = producto => producto.nombre

const resultado = carrito.map(obtenerNombres);

console.log('resultado', resultado)