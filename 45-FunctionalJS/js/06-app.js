/* Pure Function o funciones puras */
/* Son funciones que retornan un dato pero no modifican los valores de las variables, es decir, si hay una variable global o una funcion global no va a modificar ese vaor, sino que rtornan un dato nuevo 

Otra caracterrstica es que con una entrada de datos, es decir, toman un parametro deben retorna la misma cantidad de datos que recibe en la entrada*/


const duplicar = (numero)=>{ //Recibe un numero
    return numero * 2; //retorna un nnumero
}

const numero1 = 20;

const resultado = duplicar(numero1);

console.log('resultado', resultado)