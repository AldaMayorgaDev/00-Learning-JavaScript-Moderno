const meses =['Enero','Febrero','Marzo'];

console.table( meses);


/*
    Agregar a final del arreglo
        nombreArreglo.push(elementoAInsertar)
*/

meses.push('Abril', 'Mayo');
//console.table( meses);


const carrito =[];

//Definir un produto

const produto ={
    nombre: 'Monitor 32 pulgadas',
    precio: 4000
};

const produto2 ={
    nombre: 'Iphone 13',
    precio: 12000
}

function Producto (nombre, precio){
    this.nombre= nombre,
    this.precio= precio
}

const produto3 = new Producto('Apple Watch', 13000);

/**Agregando producto hasta el pinal con push() */
carrito.push(produto);
carrito.push(produto2);



/**Agregando producto hasta el inicio con unshif()*/
carrito.unshift(produto3)


console.table(carrito);

