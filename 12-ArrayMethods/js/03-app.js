const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const alumnos = [
    { nombre: 'Juan Carlos', edad: 30 },
    { nombre: 'Mariana', edad: 20 },
    { nombre: 'Andrea', edad: 10 },
    { nombre: 'Jesus', edad: 30 },
    { nombre: 'Santiago', edad: 12 },
    { nombre: 'Carmen', edad: 30 },
];


/**Sumar todos los precios con for each */

let total = 0;
carrito.forEach((producto)=>{return total += producto.precio});
console.log('total', total);

/**Sumar todos los precios con reduce() */

/**
 * 
 * const VariableGuardaraTodaSuma = nombreArray.reduce((VariableDeValorPrevio, valorActual)=>{return VariableDeValorPrevio + valorActual}, valorConElQueInicia)
 */
let sumaCarrito = carrito.reduce((cantidad, producto)=> {
    return cantidad + producto.precio} ,0
);
console.log('sumaCarrito', sumaCarrito);