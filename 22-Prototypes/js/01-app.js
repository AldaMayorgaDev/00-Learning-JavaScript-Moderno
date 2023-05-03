/* Prototypes en JS */

//Objeto literal ----> Forma mas estatica
const cliente ={
    nombre: 'Aldahir',
    apellido: 'Mayorga', 
    saldo: 500
}

console.log('cliente', cliente);

//Object Constructor----> Forma mas dinamica y reutilizable

//Constructor del objeto
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const aldahir = new Cliente('Aldahir M', 500);

console.log('aldahir:', aldahir);