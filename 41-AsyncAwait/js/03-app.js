/* Async await  en function expression */

function descargarClientes() {
    
    return new Promise((resolve, reject) =>{
        const error = false; //False entra al resolve, true entra al reject

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error en la conexion');
            }
        }, 1000);
    })
}

//Async Await
/* la funcion padre debe tener async, la funcion hijo o  donde quieres bloquear el codigo tiene que tenener un await */
const ejecutar = async () => {
    try {
        console.log(1+1)
        const respuesta =  await descargarClientes(); //este await dice, espera a que descargarCliente termine de ejecutarse y despues sigue.

        console.log(2+2);
        console.log(respuesta)
    } catch (error) {
        console.log('El error fue:',error);
    }
}

ejecutar();