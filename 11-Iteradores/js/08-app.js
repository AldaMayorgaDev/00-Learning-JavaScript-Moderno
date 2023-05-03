/**
 * for In
 * Itera sobre objetos
 * si lo queermos poner a iterar sobre un arreglo solo deuvleve los indices
 */

 const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

for(pendiente in pendientes){
    console.log('pendiente: ', pendiente);
}

const automovil ={
    marca: 'Nissan',
    motor: 1.6,
    color: 'negro',
    modelo: 'Juke',
    anio: 2012
}

/* for (propiedad in automovil){
   // console.log('propiedad: ', propiedad);

    console.log(`${automovil[propiedad]}`);
} */


/**Metood mas sencillo */

for (let [llave, valor] of Object.entries(automovil)){
    console.log(llave, valor);
    
}
