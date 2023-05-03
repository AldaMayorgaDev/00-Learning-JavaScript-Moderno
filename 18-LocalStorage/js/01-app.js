/* LocalStorage persiste mas que sessionStorage

localStorage persiste aun reiniciando navegador, apagar el pc
sessionStorage No persiste , los datos se pierden al cerrar el navegador
*/

/* Agregar elementos a localStorage 

localStorage.setItem('llave', ´valor´)

NOTA: localStorage solo almacena String


*/

localStorage.setItem('nombre', 'aldahir');


/* Almacena un objeto en localStorage 
        Es neceaario convertirlo a string

        const nombreVariable = JSON.stringify(nombreObjetoAConvertir);
        localStorage.setItem('nombreClave', nombreVariable );
*/


const producto = {
    nombre : 'Monitor 24"',
    precio : 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString)



/* Almacena un arreglo en localStorage 
        Es necesario convertirlo a string con JSON.stringify

        const nombreVariable = JSON.stringify(nombreArregloAConvertir);
        localStorage.setItem('nombreClave', nombreVariable );
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
