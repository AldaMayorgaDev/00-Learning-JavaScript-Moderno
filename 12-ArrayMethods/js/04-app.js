/**Filtrer */

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

//Extraer todos los elementos que cueste mas de 300

/**
 *  cons VariableQueGuardaraArregloRespuesta = nombreArray.filter((elemento)=>{return condicion})
 */
const resultado = carrito.filter((producto)=>{
    return producto.precio>= 300;
});

console.log(resultado);

//Alumnos que tienen mas de 18 años y menos de 28

const alumnosAdolecentes = alumnos.filter((alumno)=>{
    return alumno.edad > 18 && alumno.edad <28;
});

console.log(`Los alumnos son:`, alumnosAdolecentes);

//Seleccionar todos los productos menos Audifonos
const productosFiltrados = carrito.filter((producto)=>{
    return producto.nombre !== 'Audifonos';
});

console.log('Los productos Filtrados son:', productosFiltrados);