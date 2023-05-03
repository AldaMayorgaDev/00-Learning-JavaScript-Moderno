/**
 * Funciones que retornan valores
 * con la palabra return valorQueRetornaraLaFuncion, indicamos que eso devolvera la funcion.
 * 
 * NOTA: cuando tenemos una funcion que retorna, debemos tener una variable a la cual se le asignara el valor que retorne la funcion
 * 
 * const nombreVariable = nombreFuncion();
 */

function sumar(a,b){
    return (a+b);
}

const resultadoSuma = sumar(5,10);

console.log('resultadoSuma', resultadoSuma);


//Ejemplo mas avanzado

let total = 0;

function agregarCarrito (precio){
    return total+=precio;
}

function calcularImpuesto (total){
    return total * 1.15;
}

total= agregarCarrito(300);
total= agregarCarrito(100);
total= agregarCarrito(500);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar:`, totalPagar);
console.log('Total: ', total);