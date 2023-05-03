/**Eliminar Elementos de un arreglo */


/**Forma  Imperativa => Modifica el array actual con metodos */

const carrito =[];

const producto1={
    nombre: 'Monitor 32 pulgadas',
    precio: 3999
};

const producto2={
    nombre: 'iPhone X',
    precio: 7000
}

const producto3={
    nombre: 'Tablet',
    precio: 3400
}

const producto4={
    nombre: 'iPad',
    precio: 3400
}

const producto5={
    nombre: 'Teclado',
    precio: 400
}

const producto6={
    nombre: 'Mouse',
    precio: 245
} 

carrito.push(producto1);
carrito.push(producto2, producto4, producto5, producto6);
carrito.unshift(producto3);

console.table(carrito);

/* //Eliminar ultimo elemento de un arreglo metodo .pop()

carrito.pop();

console.table(carrito);


//Eliminar primer elemento de un arrgelo metodo .shift()

carrito.shift();
console.table(carrito) */


//Eliminar de en medio o cualquier posicion Se utiliza el metodo .splice(indiceDeDondeComieza, CuantosElementosEliminara);
carrito.splice(1, 4)
console.table(carrito);
