/**
 * Eventos sobre los inputs y teclado
 */

const busqueda =  document.querySelector('.busqueda');


/*********************************************** */
/**
 * Evento keydown => cuando se oprime una tecla
 */

busqueda.addEventListener('keydown', ()=>{
    console.log('Keydown => escribiendo');
});


/*********************************************** */
/**
 * Evento keyup => cuando se oprime una tecla y se suelta
 */

 busqueda.addEventListener('keyup', ()=>{
    console.log('Keyup => escribiendo');
});

/*********************************************** */
/**
 * Evento blur => cuando se activa o selleciona el input de entrada y se da clic fuera de este
 */

 busqueda.addEventListener('blur', ()=>{
    console.log('blur => Click en el input y clic a fuera del input');
});


/*********************************************** */
/**
 * Evento copy => cuando se escribe en el input y despues se copia el texto escrito ya sea con copy o ctrl+c
 */

 busqueda.addEventListener('copy', ()=>{
    console.log('copy => copiaste el texto pillo');
});

/*********************************************** */
/**
 * Evento paste => cuando se pega algo en el input con pegar o ctrl+v
 */

 busqueda.addEventListener('paste', ()=>{
    console.log('paste => pegaste el texto pillo');
});

/*********************************************** */
/**
 * Evento cut => cuando se corta el texto del input con cortar o ctrl+x
 */

 busqueda.addEventListener('cut', ()=>{
    console.log('cut => cortaste el texto pillo');
});


/*********************************************** */
/**
 * Evento input => cuando se hace cualquier accion anterior en el input,solo el blur no lo detecta 
 */

 busqueda.addEventListener('input', ()=>{
    console.log('input => algo hiciste en el input');
});

/*********************************************** */
/**
 * Como enviar lo que se escibre en el input
 * elemento.addEventListener('input', (evento)=>{
 *      event.target.value //Aqui es donde obtenerlos el valor del input
 * })
 */

 busqueda.addEventListener('input', (event)=>{
    console.log(event.target.value);
});