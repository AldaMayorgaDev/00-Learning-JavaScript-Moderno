/**
 * Acceder a los valores del objeto y asignarlos a una variable
 * DESTRUCTURING
 * 
 */

 const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

//Forma Antigua
const nombre= producto.nombre;

/*Forma Nueva: Destructuracion de objetos / Destructuring
    const {keysQueNecesitamosdelObjeto} = nombreObjeto;
*/
const {precio, disponible} = producto;





console.log('Valor: ', nombre);
console.log('Valor: ', precio);
console.log('Valor: ', disponible);