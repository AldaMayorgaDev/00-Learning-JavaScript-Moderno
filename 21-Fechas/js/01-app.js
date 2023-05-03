/* Fechas en JS

Las fechas reciden en un objeto llamado date
*/

const  diaHoy = new Date(); //Toma la fehca automatica
const diaEstablecido = new Date('1-15-2002'); //Toma la fecha asignada 'M-D-Año'
let valor;

valor = diaHoy;
console.log('Valor',valor);
console.log('Fehca establecida',diaEstablecido );


/* Metodos para ojeto de fecha */

// getFullYear(); ---> Devuelve el año YYYY

valor = diaHoy.getFullYear();
console.log('Valor:',valor);

// getMonth(); ---> Devuelve el mes MM
/* NOTA getMonth devuelve enero como 0, Febrero como 1 */
valor = diaHoy.getMonth();
console.log('Valor:',valor);



// getMinutes(); ---> Devuelve el minuto actual
valor = diaHoy.getMinutes();
console.log('Valor:',valor);



// getHours(); ---> Devuelve la Hora actual en formato 24
valor = diaHoy.getHours();
console.log('Valor:',valor);



// getTime(); ---> Devuelve los milisegundo que han trasncurrido desde el 1/Enro/1970 hasta la fecha, siempre cambia.
valor = diaHoy.getTime();
console.log('Valor:',valor);