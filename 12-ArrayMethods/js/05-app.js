/**
 * find 
 * 
 * */

 const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const alumnos = [
    { nombre: 'Juan Carlos', edad: 25 },
    { nombre: 'Mariana', edad: 20 },
    { nombre: 'Andrea', edad: 10 },
    { nombre: 'Jesus', edad: 23 },
    { nombre: 'Santiago', edad: 12 },
    { nombre: 'Carmen', edad: 19 },
];

//con forEach() 
let resultado = '';
carrito.forEach((produto, index)=>{
    if(produto.nombre === 'Tablet'){
        resultado = carrito[index];
    }
});
console.log('resultado', resultado);

//con find() Solo devulve el promer resultado que concide

/**
 * const varibleQuecuardaraRespuesta = nombreArray.find((elemento)=>{
 * return elemento.key === condicionBuscqueda})
 */
const resultado2= carrito.find((producto)=>{
    return producto.nombre === 'Tablet';
});
console.log('resultado2', resultado2)