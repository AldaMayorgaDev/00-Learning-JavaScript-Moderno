/* Crear un nuevo set
    Sintaxis:

    const nombreVariable = new Set();
*/

const carrito = new Set();



/* Agregar Elementos a set

    Sintaxis:

    nombreVariable.add(valor);

    NOTA: los set no permiten valores repetidos
*/

carrito.add('Camisa');
carrito.add('Jeans');


console.log('carrito:', carrito);


/* Mostrar longitud de set */
console.log('carrito.size', carrito.size)

/* Mostrar si el set contiene un valor */
console.log('carrito.has(camisa):', carrito.has('Camisa'));

/* Eliminar un valor especifico del set */
console.log('carrito.delete(camisa):', carrito.delete('Camisa'));

/* Eliminar todos los valores del set */
console.log('carrito.clear():', carrito.clear());

/* Los set son iterables */
carrito.forEach(producto =>{
    console.log('producto :>> ', producto);
})
console.log('carrito:', carrito);



/* Ejemplo de uso de un set

    Del siguiente arreglo, eliminar los duplicados
*/

const numeros =[10,10,20, 30, 40,50, 10, 20];
const noDuplicados = new Set(numeros);
console.log('noDuplicados :>> ', noDuplicados);