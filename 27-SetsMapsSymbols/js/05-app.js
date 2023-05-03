/* Symbols

permite crear una propiedad unica, es decir no son iguales nunca*/

const sym = Symbol('1');
const sym2 = Symbol('1');


if(sym === sym2) {
    console.log('Son iguales:');
}else{
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona ={}

//Agregar nombre y apellido como llaves del objeto

persona[nombre] = 'Aldahir';
persona[apellido] = 'Mayorga';
persona.tipoCliente ='Premium';
persona.saldo= 500;

console.log('persona :>> ', persona);


//Para acceder a una propiedad Symbol, se utilizan [nombrePropiedad]

console.log('persona[nombre] :>> ', persona[nombre]);

//Las propiedades que utilizan un Symbol no son iterables, se mantienen en forma privada.


//Definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente={};

cliente[nombreCliente] = 'Pedro';

console.log('cliente :>> ', cliente);

console.log('cliente[nombreCliente] :>> ', cliente[nombreCliente]);