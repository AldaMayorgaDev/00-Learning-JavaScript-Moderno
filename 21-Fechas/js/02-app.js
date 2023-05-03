/* Libreria Moment.js para formatear fecha más fácil */

const  diaHoy = new Date();

moment.locale('es'); //Indica que las fechas seran en Español

console.log('fecha', moment().format('YYYY-MM-DD')); //Indicamos el formato de salida de fecha 

console.log('fecha', moment().format('MMMM Do YY')); //Indicamos el formato de salida de fecha 

console.log('fecha', moment().format('dddd')); //Indicamos el formato de salida de fecha 

console.log('fecha:', moment().add(3, 'days').calendar()); //Ejemplode una fecha proxima