/**Metodos rapidos de arrays */

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


for (let i=0; i<carrito.length; i++){  
    console.log(`${carrito[i].nombre}, Precio: $${carrito[i].precio}`);
};

/**
 * forEach
 * Es una funcion para iterar y recorrer un array
 *      nombreArray.forEach(function(NombreVariableDeElementoDeArreglo){Lo que tiene que hacer })
 */

carrito.forEach(function(producto){
    console.log(`${producto.nombre}, Precio: $${producto.precio}`);
});