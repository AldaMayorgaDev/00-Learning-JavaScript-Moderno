/**
 * 
 * Operador && (AND) para revisar que se cumplan 2 o más condiciones
 */

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log(`Si puedes comprar`);
}else if(!usuario && !puedePagar){
    console.log(`No puedes comprar`);
}else if(!usuario){
    console.log(`Inicia sesion o crear un cuenta`);
}else if(!puedePagar){
    console.log(`Fondos insufiecientes`);
}