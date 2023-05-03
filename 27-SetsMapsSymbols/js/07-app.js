/* Generadores */

/* Un generador es una funcion que retorna un iterador, se idenfitica por el * antes del nombreDeLaFuncion

    function *nombreGenerador(){}


    los yeald son los valores que el generador va a iterar.

*/

function *crearGenerador(){
    yield 1;
    yield 'Aldahir';
    yield 3+3;
    yield true;
}

//Acceder
const iterador = crearGenerador();


console.log('iterador :>> ', iterador);
console.log('iterador.next() :>> ', iterador.next());