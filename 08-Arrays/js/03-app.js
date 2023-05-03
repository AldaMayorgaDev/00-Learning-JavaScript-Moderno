/**Acceder a todos los Elementos del arreglo */

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto'];

console.table(meses);

//Cuanto mide el arreglo

console.log('El arreglo mide: ',meses.length);


/**
 * Para Recorrer el arreglo se ocupa un interador, en este caso un For loop: 
 * 
 * for(valorDondeInicia; CuantasVecesSeEjecutara; CuantoIncrementara){
 *      Funcion que haraa;
 * }
*/

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}