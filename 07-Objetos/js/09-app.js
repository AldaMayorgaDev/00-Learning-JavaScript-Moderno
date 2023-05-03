 "use strict"; //Activa el modo stricto y no permite malas practicas

 const producto = {
     nombre: "Moitor 20 pulgadas",
     precio: 3000,
     disponible: true
 }
 
 
 /**
 * Sellar un objeto
    seal
         Object.seal(nombreObjeto);
     Permite sellar un objeto, se pueden modificar propiedades existentes pero no se puede eliminar o agregar keys
 
 */
 
 Object.seal(producto);
 producto.disponible = false;
 //producto.imagen = 'imagen.jgp';
 //delete producto.disponible; 
 
 console.log('Producto: ', producto);
 
 
 /**
  * Para saber si un objeto esta sellado o no se utiliza isSealed
  *      Object.isSealed(nombreObjeto);
  * devuelve un valor booleano
  */
 
 console.log('Sealed: ', Object.isSealed(producto));