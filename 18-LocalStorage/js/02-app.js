/* Obtener los datos de localStorage 

    const nombreVariableAAlamacenar = localStorage.getItem('keyEnLocalStorage')
*/

const nombre = localStorage.getItem('nombre');
console.log('nombre :>> ', nombre);


/* Obtener un Objeto almacenado en localStorage

    const variable = localStorage.getItem('nombreObjeto');
    JSON.parse(nombreObjeto);
*/

const objetoProducto = localStorage.getItem('producto');

console.log('objetoProducto :>> ', JSON.parse(objetoProducto));


/* Obtener un Arreglo almacenado en localStorage

*/

const meses = localStorage.getItem('meses');
const arrayMeses = JSON.parse(meses);
console.log('arrayMeses :>> ', arrayMeses);