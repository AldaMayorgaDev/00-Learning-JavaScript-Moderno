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


//**Encontrar el indice en el que se encuentra x elemento */

//Forma clasica con forEach

meses.forEach((mes, index)=>{
   //Es un iF pero lo hare con ternario para practicar
  /*  (mes === 'Enero')? console.log('indice', index) :  console.log('mes no existe'); */
    if(mes === 'Abril'){
        console.log('indice', index);
    }

});

/**Metodo findIndex() */
/**
 *  const variableAGuardarRespuesta =  nombreArreglo.findIndex((elemento)=>{return elemento === valorABuscar});
 */


const indice = meses.findIndex((mes)=>{
   return mes=== 'Abril';
});

console.log('Encontrado con findIndex() en: ', indice);


// Ejemplo buscar el idice de Tablet

const indiceProducto = carrito.findIndex(producto =>{
    return producto.nombre === 'Tablet';
});
(indiceProducto<0)?console.log('indice de Producto No encontrado'): console.log(`Producto encontrado en el indice ${indiceProducto}`);


//Ejemplo buscar el idice de el alumno de 12 anos de edad

const indiceAlumno = alumnos.findIndex(alumno =>{
    return alumno.edad === 12;
});
(indiceAlumno<0)? console.log('indice No encontrado'):  console.log(`ALumnos encontrado en el indice ${indiceAlumno}`);


