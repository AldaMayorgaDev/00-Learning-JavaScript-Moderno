/**
 * Objetos dentro de Objeto
 */

 const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true,
    informacion: {
        medidas : {
            peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
            pais: 'China',
            importadora: 'Aguila S.A. de C.V.'
            
        }
        
    }
}

console.log('El Objeto: ', producto);
console.log('Accediendo: ', producto.informacion.fabricacion.importadora);