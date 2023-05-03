/**
 * for of
 * itera sobre Arreglos
 */

 const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

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

/**
 * for( elemento of nombreArreglo){
 *      codigo a realizar por cada elemento
 * }
 */


for(let ElementoPendiente of pendientes){
    console.log('ElementoPendiente: ', ElementoPendiente);
};


for(let ElementoCarrito of carrito){
    console.log('ElementoCarrito: ', ElementoCarrito);

}