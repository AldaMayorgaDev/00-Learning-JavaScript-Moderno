/* Manejar dos promesas al mismo tiempo con async y await */

function descargarNuevosClientes() {
    return new Promise((resolve, reject) => {
        console.log("Descargando clientes")

        setTimeout(() => {
            resolve('Se han descargado los clientes exitosamente');
        }, 5000);
    })
}


function descargarNuevosPedidos() {
    return new Promise((resolve, reject) => {
        console.log("Descargando pedidos")

        setTimeout(() => {
            resolve('Se han descargado los pedidos exitosamente');
        }, 3000);
    })
}

/* Ejemplo se requiere que las dos promesas se incien al mismo tiempo
dado que si manejamos 
    const clientes = await descargarNuevosClientes(); 
    const pedidos = await descargarNuevosPedidos();
Esto impica a que el await de clientes detiene la ejecucion, y ya una vez finalizado, inicar pedidos

para atender dos o mas promesas al mismo tiempo se utiliza 
    await Promise.all([promesa1(), promesa2(), promesan()])

    await Promise.all([])  es un arreglo de diferentes promises que se quieren ejecutar al mismo tiempo
*/
const app = async ()=>{

    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]); 
        console.log('respuesta', respuesta)   
    } catch (error) {
        console.log('El error es:', error);
    }
}

app();