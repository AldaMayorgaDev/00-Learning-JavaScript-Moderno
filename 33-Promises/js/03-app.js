/* Promise */
/* Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó. 


    const nombrePromesa = new Promise((resolve, reject) =>{

    }

los parametros: 
    resolve -> es lo que se va a ejecutar cuando la promesa se ejecuta correctamente / se cumple

    reject -> es cuando tenemos un error en el promise
*/

/* Una Promise puede tener uno de los siguientes estados:

    - Pending: estado inicial, ni cumplido (fulfilled), ni rechazado (rejected)
    - Fulfilled: la operación se ha completado con éxito
    - Rejected: La operación ha fallado
 */

/////////////////////////////////////
//  Paso 1.- Se define una promesa //
/////////////////////////////////////
const aplicarDescuento = new Promise((resolve, reject)=>{ 
    const descuento = true; //Este true / false simula el resultado de la promesa.
    
    if(descuento) {
        resolve('La promesa se cumplio, Descuento Aplicado')
    }else{
        reject('La promesa bo se cumpli, oNo se pudo aplicar descuento')
    }
});

/////////////////////////////////////
//  Paso 2.- Utilizar una promesa //
/////////////////////////////////////
/* 
    nombrePromesa
        .then(resultado=>{
            Lo que se ejecutaria/ pasaría despues de que sea exitosa la promesa
        })
        .cacth(error =>{
            Lo que se ejecutaria/ pasaría despues de que sea fallida la promesa
        })
*/
aplicarDescuento
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(resultado);
    })

console.log('aplicarDescuento :>> ', aplicarDescuento);