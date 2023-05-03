const numeros =[10, 20,30,40,50];

console.log('numeros', numeros);
console.table(numeros);


/**
 * Acceder a un elemento 
 *      nombreArreglo[indexElementoDeseado];
 * Si el indice no existe devuelve un undefined
*/

console.log(numeros[2]);

/**
 * Acceder a un Elemento de un arreglo dentro de un arreglo
 * 
 * nombreArreglo[indeceElementoArreglo][IndiceElementoBuscado]
 */

const temario = [
    'unidad 1',
    'unidad 2',
    'unidad 3',
    'unidad 4',
    [
        'Examen1',
        'Examen2', 
        'Examen3', 
        'Examen4'
    ]
]

//Voy a acceder al examen 2

console.log('Examen 2: ', temario[4][1]);
