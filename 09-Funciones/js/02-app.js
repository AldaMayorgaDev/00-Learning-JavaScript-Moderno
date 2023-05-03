/**
 * Diferencia entre Fuction expression y Function Decaration
 */


/**
 * Declaracion de funcion / fuction declaration
 * 
 * function nombreFuncion (parametros de funcion){
 *         codigo / cuerpo de la funcion
 * }
 */
sumar();
 function sumar(){
    console.log("La suma:", 2+2);
}

/**Mandar llamar o ejecutar la funcion de la
 *  nombreFuncion();
*/




/**Expresion de funcion / Function expression
 * 
 * const nombreVariableQueAlmacenaFuncion = function(parametros){
 *      codigo /cuerpo de funcion
 * }
 */
sumar2();
const sumar2 = function(){
    console.log(3+3)
};


/** La gran diferencia entre ambas es que Funcion declaration =>>> function (){}, es compatible con HOISTING, es decir no importa si mandamos ejecutar antes de declarar nuestra funcion, porque al ser compatible con hoisting, JS hace dos vueltas de lectura en nuestro codigo, la primera vuelta anota y eleva todas las funcioens y en la segunda ejecuta las llamadas de las funciones. 
 * 
 * En cambio, con function expression =>> const xxxx = function (){};
 * no es compatible con hoisting, porque en la rimera vuelta no se da cuenta que es funcion porque la entiende como una constante o varible, no la anota ni la eleva, y en la segunda vuelta al mandarse ejecutar antes de declararla, JS nos dice que no esta inicializada o que no encuentra dicha funcion. Por eso esta forma solo es posible si su mandada a ejecutar va despues de la declaracion de la funcion, no es compatible con hoisting.
 */

