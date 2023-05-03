/* API de JS para detectar si tenemos o no conexion a internet */


window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if (navigator.onLine){ //Valida si esta conectado a internet o no navigator.onLine devuelve true/false
        console.log('Si estas conectado');
    }else{
        console.log('No tienes acceso a internet');
    }
}