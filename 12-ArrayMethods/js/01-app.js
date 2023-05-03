const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

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

/**Arrays Methods */

/*Comprobar si un valor existe en un arreglo */

//Forma tradicional con iteradores
meses.forEach((mes)=>{
    if(mes=== 'Enero'){
        console.log('Si existe');
    }
});

//Forma con array methods =>> includes
/**includes devulve un valor booleano
 * NO funciona en arreglo de objetos, en ese caso se usa .some
 * const VaribleDondeSeGuardara = nombreArreglo.includes(loquesebusca);
 */

const resultado = meses.includes('Enero');
console.log(resultado);


/**En un arreglo de objetos se usa .some 
 *  const variableQueGuardaraRespuesta = nombreArreglo.some((elemento)=>{
 *          return elemento.key = valorBuscado;
 * })
 * 
*/

const existencia = carrito.some((producto)=>{
    return producto.nombre = 'Celular';
});
console.log(existencia)

//Ejemplo dos checar si en alumnos existe carmen o hay un alumno que tiene edad 20

const alumnoEncontrado = alumnos.some(alumno =>{
    return alumno.nombre === 'Carmen' || alumno.edad === 20;
});
console.log('El alumno se encuentra:', alumnoEncontrado);

//Ejemplo .some en arreglo de indices, arreglo normal
// Buscar si en el arreglo existe diciembre

const existeMes = meses.some((mes)=>{
    return mes === 'Diciembre';
});

console.log('El Mes existe:', existeMes);