/* Ejecutar con pantalla completa con JS */

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

const imagenAAgrandar = document.querySelector('#imagen');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

//Si se quiere hacer fullscreen a todo el documento html
function pantallaCompleta() {
    document.documentElement.requestFullscreen();
};

//Si se quiere hacer fullscreen a determinado elemento
/* function pantallaCompleta() {
   imagenAAgrandar.requestFullscreen();
}; */



function cerrarPantallaCompleta() {
   document.exitFullscreen()
}