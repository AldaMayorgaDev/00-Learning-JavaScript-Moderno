/**
 * Agregar y Eliminar Propiedades al objeto
 */

 const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
}


/*Agregar nuevas propiedades al objetos
    nombreObjeto.NuevaKey = valordePropiedad;
*/

producto.imagen = "imagen.jpg";


/*Eliminar propiedades al objetos
    delete nombreObjeto.KeyAEliminar;
*/

delete producto.disponible;

console.log('Objeto :>> ', producto);