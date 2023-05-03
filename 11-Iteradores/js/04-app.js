/**While loop */

//Se ejecuta mientras una condicion sea verdadera

/**
 * Paso 1: iniciarlizar el while
 * let i = 0;
 * 
 * Paso 2: while(condicionARevisar){
 *      codigo a realizar
 * 
 *      incremento
 * }
 * 
 */


let i = 0; //Inicializar el while

while(i<=10){ //Condicion
    console.log('i: ', i);
    i++; //Incremento

}

/**Ejemplo Fizz buzz con while loop */

/* let j= 1;

while(j<=100){ 
    if(j %3 ===0 && j %5 ===0){
        console.log(`${j} FIZZ BUZZ`);
    }else{
        if(j % 3=== 0){
            console.log(`${j} fizz`);
        }else if (j % 5 === 0){
            console.log(`${j} buzz`);
        }else{
            console.log(`${j}`)
        }
        
    }
    j++;
} */

/**Ejemplo Pares e impares con while loop*/

let n = 0;
let arrayPares =[]; 
let arrayImpares =[];

while (n <=100){
    
    if(n % 2 === 0){
        console.log(`${n} es par`);
        arrayPares.push(n);
    }else{
        console.log(`${n} es impar`);
       arrayImpares.push(n);
    }
    n++;
}

console.log(`Los pares: ${arrayPares}`);
console.log(`Los impares: ${arrayImpares}`);