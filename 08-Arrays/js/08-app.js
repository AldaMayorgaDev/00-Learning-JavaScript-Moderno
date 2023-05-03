const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

const {nombre}= producto;

console.log('Nombre:', nombre);

/**
 * Destructuring con Arreglos
 *  const [variable] = nombreArreglo;
 * esto apuntara al inidce 0, para llegar a un indice mayor, es necesario agregar espacio y coma ( ,) hasta llegar al indice necesario
 * 
 */

//Destructurar indice 3 con valor de 40
const numeros =[10,20,30,40,50];

const [ , , ,tercero]= numeros;

console.log(tercero);


//Destructurar  indice 1 y 2, lo demas que quede en un arreglo

const [ ,iUno,iDos, ...restoDeElementos]= numeros;

console.log(`Indice1: ${iUno}, Indice2: ${iDos}, Arreglo con el resto de Elementos: ${restoDeElementos}`);
