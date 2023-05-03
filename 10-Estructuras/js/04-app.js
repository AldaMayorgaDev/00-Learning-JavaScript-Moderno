/**Else if*/

const dinero = 200;
const totalAPagar = 300;
const tarjeta = true;

if(dinero>=totalAPagar){
    console.log('si puedes pagar');
}else if(tarjeta){
    console.log('Si puedes pagar por tarjeta');
}
else{
    console.log('Fondos insuficientes');
}