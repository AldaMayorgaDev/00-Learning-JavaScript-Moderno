/*Prototypes en JS  */


//Object Constructor----> Forma mas dinamica y reutilizable

//Constructor del objeto
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const aldahir = new Cliente('Aldahir M', 500); //Instancia del objeto

console.log('aldahir:', aldahir);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre}  tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre}  tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log('first', formatearCliente(aldahir));


function Empresa (nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const csj = new Empresa('Codigo con Juan', 4000, 'Curso Online');
console.log('first', formatearEmpresa(csj));