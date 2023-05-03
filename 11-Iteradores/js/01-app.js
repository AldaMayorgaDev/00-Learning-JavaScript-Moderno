/**For Loop se ejecuta hasta que se cumpla una condicion */

/**For 
 * 
 *      for(inicializador o donde empieza a contar; condicion a revisar; incremento ){
 *              lo que se va a ejecutar
 *      }
 * 
*/

for (let i=0; i<=10; i++){
    console.log(`Numero i: ${i}`);
};

// numeros pares e impares del 0-10
let arregloPares =[];
let arregloImpares= []
for(let i=0; i<=10; i++){
    if(i%2 === 0){
        console.log(`${i} Es par`);
        arregloPares.push(i);
    }else{
        console.log(`${i} es impar`);
        arregloImpares.push(i);
    }
}

console.log(`Arreglo pares`, arregloPares);
console.log(`Arreglo impares`, arregloImpares);

//Recorriendo un Array con un for loop
const carrito =[
    {nombre: 'Monitor 27 pulgadas', precio: 5000},
    {nombre: 'Smart TV 32\"', precio: 1000},
    {nombre: 'Camara Web logithec', precio: 890},
    {nombre: 'Disco duro SSD 128GB', precio: 1000},
    {nombre: 'USB 500GB', precio: 399},
    {nombre: 'PC Gamer', precio: 14000},
    {nombre: 'MousePad apple', precio: 5999},
    {nombre: 'Laptop i3 ', precio: 7000},
    {nombre: 'Mouse', precio: 350}
];

for (let i= 0; i< carrito.length; i++){
    console.log('carrito: ', carrito[i].nombre)
}