const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/**
 * every, 
 * 
 * Todos los elementos del arreglo deben cumplir con la condicion para que devuelva un true
 */

const resultado = carrito.every((producto)=>{
    return producto.precio<100;
});

console.log('Todos los productos son menores que 100', resultado);

/**
 * some, 
 * 
 * Al menos un elemento del arreglo deben cumplir con la condicion para que devuelva un true
 */

const resultado2= carrito.some((producto)=>{return producto.precio === 100});
console.log('Al menos un producto del arreglo cuesta 100', resultado2);
