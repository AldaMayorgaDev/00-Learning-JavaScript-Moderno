/* Functional JavaScript */

/* Es crear tu codigo utilizando funciones
 Hay ciertas reglas, básicaente las funciones deben tomar una entrada y tener una salida de datos
 No se permite la modificacion de los datos.


 Conceptos clave de functional JS
 1.- Inmutabilidad: Los datos no deben modificarse (Utilizar const casi siempre)
 2.- Separar Funciones de datos
 3.- First-Class functions

 Inmutabilidad
 Un dato no puede cambiarse

 Firts-Class Functions
 Es poder crear funciones que parezcan cualquier varibele como lo es functin expression.
 const suma = function (a,b){
    return a+b;
 }
 const resultado = suma;

 es decir, Se puedes asginar una funcion de esta forma, significa que el lenguaje soporta first-class function como si fuera un strign, un numero, un booleano, un arreglo o un objeto;

*/

const suma = function (a,b){
    return a+b;
}

const resultado = suma;

console.log('resultado', resultado(10, 20))