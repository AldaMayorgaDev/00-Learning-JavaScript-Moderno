/**
 * Destructuracion de Objetos anidados
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
            importadora: 'Aguila S.A. de C.V.',
            provedores:{
                nombreProvedor: 'martin',
                telefonos: {
                    casa: 78900129123,
                    movil: 8219312301,
                    trabajo: 6893923232},
                email: 'martin@gmail.com'
            }
            
        }
        
    }
}


/**
 * Destructuring
 *      const {keyPadre:{keyAnidada}} = nombreObjeto;
 */

//Accediendo a medidas
const {informacion:{medidas}}= producto;

//Accediendo a peso
const {informacion:{medidas:{peso}}}= producto;

//Accedinedo a dos keys
//const {informacion:{fabricacion:{pais, importadora}}}= producto;

//Acediendo a telefonos de proovedor e importadora
const {informacion:{fabricacion:{importadora, provedores:{telefonos:{casa,movil,trabajo}}}}} = producto;

console.log('Medidas: ', medidas);
console.log('Peso: ', peso);
//console.log('Pais:', pais, ' Importadora: ', importadora);

console.log('Casa: ', casa, ' movil: ', movil, ' trabajo: ', trabajo, 'importadora', importadora)