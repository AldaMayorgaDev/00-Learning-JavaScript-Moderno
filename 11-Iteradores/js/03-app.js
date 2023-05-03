/**
 * Reto del fizz buzz
 * Si un numero es multiplo de 3 imprimir fizz
 * Si un numero es multiplo de 5 imprimir buzz
 * si son multiplos de 3 y 5 imprimir fizz buzz
 */

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log(`El numero ${i} fizz buzz`);
    }else{
        if(i % 3 ===0){
            console.log(`El numero ${i} fizz`);
        }else if(i % 5===0){
            console.log(`El numero ${i} buzz`);
        }else{
            //continue;
        console.log(`El numero ${i}`)
    }
    }
}