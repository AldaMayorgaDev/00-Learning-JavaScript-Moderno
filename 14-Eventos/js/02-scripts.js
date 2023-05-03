/*****
 * Eventos con el mouse
 */

const nav = document.querySelector('.navegacion');


//Registrar un evento

//Evento click
nav.addEventListener('click', () => {
    console.log('clic en nav');
})

//evento mouseenter
/**
 * mouseenter: el evento onmouseenter se activa solo cuando el puntero del mouse golpea el elemento.
 */
nav.addEventListener('mouseenter', () => {
    console.log('Evento mouseenter');
    nav.style.backgroundColor= 'blue';
});

//evento mouseout
/**
 * mouseout: el evento onmouseoutr se activa solo cuando el puntero del mouse sale del elemento.
 */
 nav.addEventListener('mouseout', () => {
    console.log('Evento mouseout');
    nav.style.backgroundColor = 'transparent';
});

/** evento mouseover
* mouseover: el evento onmouseover se activa cuando el puntero del mouse ingresa a un elemento o cualquiera de sus elementos secundarios.
*/
nav.addEventListener('mouseover', ()=>{
    console.log('Evento mouseOver');
});


/**
 * evento mousemove
 * mousemove: el evento onmousemove se activa cada vez que se mueve el puntero del mouse cuando está sobre un elemento.
 * 
*/

nav.addEventListener('mousemove', ()=>{
    console.log('mousemove => El mouse se esta moviendo en NAV');
})


/**
 * evento mousedown
 * mousedown: el evento onmousedown se activa cada vez que se da click el puntero del mouse cuando está sobre un element y se sostiene.
 * 
*/

nav.addEventListener('mousedown', ()=>{
    console.log('mousedown => El mouse se oprimio en NAV');
})

/**
 * evento mouseup
 * mouseup: el evento onmouseup se activa cada vez que se da click el puntero del mouse cuando está sobre un element y se suelta.
 * 
*/

nav.addEventListener('mouseup', ()=>{
    console.log('mouseup => El mouse se oprimio y solto en NAV');
});


/** evento doble Click dblclick 
 * dblclick
 * se activa cuando das doble clic con el mouse sobre un elemento
*/

nav.addEventListener('dblclick', ()=>{
    console.log('dblclick activado');
});