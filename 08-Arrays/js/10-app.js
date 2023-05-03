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

/**.map() te da un nuevo arreglo eso lo diferencia del forEach, porque l forEach no te da nada*/

carrito.forEach(function(producto){
    console.log(`${producto.nombre}, Precio: $${producto.precio}`);
});

carrito.map(function(producto){
    console.log(`${producto.nombre}, Precio: $${producto.precio}`);
});


//Multiplicar por 5 cada elemento del array

const sueldosPorHora =[100, 230, 100, 500, 90, 100];

//con forEach

sueldosPorHora.forEach(function(sueldo){
    console.log (`El sueldo ${sueldo}, multiplicado por 5 es igual a: ${sueldo*5}`);
});

//con map() 

const sueldoIncremento = sueldosPorHora.map(function(elementoDeArray){
    return elementoDeArray * 5;
})

console.log('Map:', sueldoIncremento);