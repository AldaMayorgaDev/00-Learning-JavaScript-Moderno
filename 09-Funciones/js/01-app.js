/**
 * Funciones: son una serie de procedimientos o instrucciones, es decir:
 * lineas de codigo que van a realizar una accion.
 */

/**
 * Declaracion de funcion / fuction declaration
 * 
 * function nombreFuncion (parametros de funcion){
 *         codigo / cuerpo de la funcion
 * }
 */

function sumar(){
    console.log("La suma:", 2+2);
}

/**Mandar llamar o ejecutar la funcion de la
 *  nombreFuncion();
*/

sumar();


/**Expresion de funcion / Function expression
 * 
 * const nombreVariableQueAlmacenaFuncion = function(parametros){
 *      codigo /cuerpo de funcion
 * }
 */

const sumar2 = function(){
    console.log(3+3)
};

sumar2();

//Se diferencia en que declaration empieza con function y expression empieza con un nombre de una varaible

