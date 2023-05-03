/**
 * Parametros y Argumentos en Funciones
 * 
 *  cuando van en la declaracion de la funcion =>>> function NombreFuncion(aqui){} se les llama parametros
 * 
 * cuando van en la ejecucion de una funcion =>>>>> nombrefuncion(aqui) se les llama argumentos
 */

function sumar(a,b){ //Aqui van parametros
    console.log(a+b);
};

sumar(5,6); // Aqui van argumentos

function saludar(nombre, apellido){ 
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Aldahir','Mayorga');