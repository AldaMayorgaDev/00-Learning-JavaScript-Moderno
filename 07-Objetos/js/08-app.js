"use strict"; //Activa el modo stricto y no permite malas practicas

const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
}




//Object Methots

/*
    Freeze 
        Object.freeze(nombreObjeto);
    Permite congelar un objeto y no modificarlo

*/

Object.freeze(producto);
/* producto.disponible = false;
producto.imagen = 'imagen.jgp';
delete producto.disponible; */

console.log('Producto: ', producto);


/**
 * Para saber si un objeto esta congelado o no se utiliza isFrozen
 *      Object.isFrozen(nombreObjeto);
 * devuelve un valor booleano
 */

console.log('Frozen: ', Object.isFrozen(producto));