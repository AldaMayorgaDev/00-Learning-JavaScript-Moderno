/**
 * Eliminar Elementos del DOM desde JS
 *      elementoAEliminar.remove()
 *      .removeChild(referencia de elemanot a eliminar)
 */

/**
 * Eliminar un elemento por si mismo
 */

//Ejemplo eliminar el primer enlace .remove()

const primerEnlance = document.querySelector('a');
console.log('primerEnlace', primerEnlance);

primerEnlance.remove(); //Borra elemento




/**
 * Eliminar un elemento desde el padre
 *      .removeChild()
 */

const navegacion = document.querySelector('.navegacion');
console.log('navegacion', navegacion.children);
navegacion.removeChild(navegacion.children[2]); //Borra elemento
console.log('navegacion', navegacion.children);