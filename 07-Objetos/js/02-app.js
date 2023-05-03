/**
 * Acceder a los valores del objeto: el
 *      Opcion1: Se hace con la sintaxis de punto nombreobjeto.key
 *      Opcion2: Con corchetes nombreObjeto['key']
 */

 const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

console.log('Objeto: ', producto.nombre);
console.log('Objeto: ', producto['nombre']);