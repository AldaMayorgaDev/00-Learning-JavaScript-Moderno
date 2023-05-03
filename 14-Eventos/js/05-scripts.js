/**
 * Eventos al dar scroll con el mouse
 */

/**Forma basica */
window.addEventListener('scroll', ()=>{
    console.log('Ejecutadno Evento Scroll en window');
})

/**
 * Como saber cuantos pixeles ha dado scroll verticalente
 */

window.addEventListener('scroll', ()=>{
    const scrollYPX = window.scrollY; 

    console.log('Pixeles en scroll vertical: ', scrollYPX);
});


/**
 * Agregar un efecto a una section al hacer scroll
 * 
 * el metodo getBoundingClientRect() ==> devuleve un objeto con informacion del objeto, por ejemplola ubicacion del elemento, y conforme se va dando scroll va recalculando cuantos pixeles faltan para llegar a ese elemento, altura, ancho, coordenadas tanto en x como en y.
 */

window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); 
    console.log('ubicacion', ubicacion);

    if(ubicacion.top< 100){
        console.log('El elemenot ya esta visible');
    }else{
        console.log('Sigue bajando')
    }
});