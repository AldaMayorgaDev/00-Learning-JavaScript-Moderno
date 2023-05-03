/* API para detectar cuando estamos viendo la pagina web actual  */

document.addEventListener('visibilitychange', ()=>{
    console.log('document.visibilityState :>> ', document.visibilityState);
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el video...')
    }else{
        console.log('Ejecutar la funcion para pausar el video...')
    }
})