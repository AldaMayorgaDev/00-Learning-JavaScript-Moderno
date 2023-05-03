/* Hoisting */
/* Es un termino que se utiliza para refereirse a como funcionan los contextos de ejecucion de JS

    Existen dos contextos Ejecucion y creacion.
    Primero se crean todas las funciones, se registran
    Segundo se ejecutan 
*/
/* Function declaration se acopla al hosting de manera que no importa si se manda llamar antes o despues la funcion, no muestra error*/

obtenerCliente('Aldahir')
function obtenerCliente(cliente) {
    console.log(`El nombre del cliente es : ${cliente}`);
}
obtenerCliente('Aldahir')


/* En cambio function Expression como su forma es una variable, el hosting primero asigna registra la variable como undefiend y despues le asigana la funcion */
nombre2('Aldahir'); //Aqui marca error 
const nombre2 = function (cliente) {
    console.log(`El nombre del cliente es : ${cliente}`);
}
nombre2('Aldahir'); //Aqui no marca error ya que se manda llamar despues de declararla