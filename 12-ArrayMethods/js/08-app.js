/**rest o spread operator */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];

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


//Agregar un elemento a un arreglo, sin modificar el arreglo original
/**
 * const varibleQueGuardaraResultado = [...arregloAcopiar, 'elementoAAgregar'];
 */

const mesesCompletos = [...meses,'Noviembre', 'Diciembre'];
console.log('meses Completos',mesesCompletos);


const producto ={
    nombre: 'Disco Duro',
    precio: 300
}

const carritoNuevo = [...carrito, producto];
console.log('carrito2:', carritoNuevo);