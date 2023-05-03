/**
 * Switch Case
 * 
 * 
 * switch(valorAComprobar){
 *      case 'valor': acciones a realizar si el valorAcomprobar sea igual al valor del casa
 *      break;
 * 
 *      default:acciones realizar si ninguna opcion de case se cumple
 *      break;
 * 
 * }
*/


const metodoPago = 'tarjeta';

switch(metodoPago){
    case'tarjeta':
        pagar();
        console.log(`Pagaste con tarjeta` );
        break;
    case 'efectivo':
        console.log(`pagaste con ${metodoPago}` );
        break;
    default:
        console.log(`pagaste con cheque`);
        break;    
};

function pagar(){
    console.log(`Pagando...`)
}