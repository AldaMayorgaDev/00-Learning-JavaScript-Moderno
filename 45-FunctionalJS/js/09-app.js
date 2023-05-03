/*Partials y   Currying*/


/* Currying es dividir una funcion que toma más de un parametro en argumentos de forma parcial */

const suma = (a,b,c)=>{
    return a+b+c;
}

//Currying y partials en dos partes
/* primera parte una funcion recie un parametro 
    segunda parte una funcion recibe dos parametros
*/
const parcial = (a)=>(b,c)=> suma(a,b,c);

const primerNumero = parcial(5); //Parte 1
const resultado = primerNumero(4,3); //parte 2
console.log('resultado', resultado)
console.log(suma(1,2,3));


//Currying y partials en 3 partes
/* primera parte una funcion recibe un parametro 
    segunda parte una funcion recibe el segundo parametro
    tercera parte una funcion recibe el tercer parametro
*/

const parcial3Partes = (a) => (b)=> (c) => suma(a,b,c);

const NumeroUno = parcial3Partes(5);
const NumeroDos = NumeroUno(4);
const result = NumeroDos(3);

console.log('result', result)

