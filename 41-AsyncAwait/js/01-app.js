/* Try y Catch */
/* Básicamente es intentar ejecutar una pieza de código y si no se puede obtenemos una excepcion que podria ser un mensaje de error para poder debbuguear pero el codigo no deja de funcionar */

console.log(1+1);
try{ //Intenta ejecutar la funcion hola
    hola();
} catch (error){ //Si no se puede se catcha la expecion y se maneja el error
    console.log(error);
}

console.log(2+2);