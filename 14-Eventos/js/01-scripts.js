

/*** Eventos
 * 
 * para agregar un evento se realizar el
 *      document.addEventListener('eventoAAgregar', Nombrefuncion)
 * 
 *      document.addEventListener('eventoAAgregar', arrowFunction);
 *       Ejemplo: 
 *              document.addEventListener('eventoAAgregar', ()=>{
 *                      codigo que hara la Arrown funtion al activarse el evento
 *               });
*/



/******************************** */

/**
 * Evento Para esperar a que todo el documento HTML este listo es
 * DOMContentLoaded
 * 
 * document.addEventListener('DOMContentLoaded', NombreFuncionAEjecutar);
 */

console.log(1);
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Documento listo', 2);
});
console.log(3);