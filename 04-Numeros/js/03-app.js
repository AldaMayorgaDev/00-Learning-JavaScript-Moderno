//objeto Math

let resultado;

//PI

resultado = Math.PI;

//Redondear math.round(numeroARedondear)
    resultado = Math.round(2.5);

//Redondear hacia arriba math.ceil(numeroARedondear)
resultado = Math.ceil(2.1);

//Redondear hacia abajo math.floor(numeroARedondear)
resultado = Math.floor(2.9);

//Raiz cuadrada math.sqrt(numero)
resultado = Math.sqrt(25);

//Valor Absoluto math.abs(numero)
resultado = Math.abs(-500);

//Potencia math.pow(Base, Exponente)
resultado = Math.pow(5, 3);

//Minimo math.min(numero1, numero2, numeroN)
resultado = Math.min(2, .999, -8);

//Máximo math.max(numero1, numero2, numeroN)
resultado = Math.max(2, .999, -8);

//numero Aleatorio math.random() Devulve un valor ente 0 y 1
resultado = Math.random();
resultado = Math.floor(Math.random()*100); //Devuelve un valor entre 0 y 100



console.log('Resultado: ', resultado );