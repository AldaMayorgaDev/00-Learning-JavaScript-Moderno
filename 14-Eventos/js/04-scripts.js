/**
 * Eventos en el formulario
 */

const formulario = document.querySelector('#formulario');

/********************************************************************** */
//FOrma con arrow funtion
formulario.addEventListener('submit',(e)=>{
    e.preventDefault(); //Preeve la accio que realizaria ese elemento por default, formulario su accion por defecto es enviar el formulario (method:Post) action= ruta definidos en la etiqueta <form></form>
    console.log('e', e);
});

/********************************************************************** */
//Forma con funcion separada para

formulario.addEventListener('submit', nombreFuncion);

function nombreFuncion(e){
    e.preventDefault();
    console.log('buscando');
    console.log('consumiendo API...')
}