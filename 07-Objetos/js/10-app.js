const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true
};

const medidas ={
    peso: '1kg',
    altura: '1m',
    ancho: '0.35m'
};

console.log('producto', producto);
console.log('medidas', medidas);


/**
 * Unir dos objetos:
 * Forma 1: Object.assing():
 * Forma 2: Spread Operator o Rest Operator
 */

/**
 *  Object.assign(nombreObjeto1, nombreObjeto2);
 * Se tiene que asignar a una varible
 *  const resultado = Object.assign(nombreObjeto1, nombreObjeto2);
 */

const resultado = Object.assign(producto, medidas);
console.log('resultado', resultado);

/**
 *  Spread Operator o Rest Operator
 * Se tiene que asignar a una varible
 *  const resultado = {...nombreObjeto1, ...nombreObjeto2}
 */

const resultado2 = {...producto, ...medidas};
console.log('resultado2', resultado2);