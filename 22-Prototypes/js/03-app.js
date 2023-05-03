/* Crear un prototype 

    Sintaxis:
        nombreObjeto.prototype.nombreFuncion = function (){
            codigo a ejecutar en esa funcion
        }
*/

function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}


//Creacion de prototype tipoCliente
Cliente.prototype.tipoCliente = function (){
    /* console.log('Desde mi nuevo proto');
    console.log(this.tipo); */

    let tipo;
    if (this.saldo > 10000){
        tipo= 'Gold';
    }else if (this.saldo > 5000){
        tipo= 'Platino';
    }else {
        tipo= 'Normal';
    }

    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function (){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira){
    this.saldo -= retira;

}
//Instanciar objeto

const pedro = new Cliente('Pedro', 190000);
console.log(pedro);



/* Llamar o ejecutar un prototype */

// nombreObjeto.nombreFuncionPrototype();

pedro.tipoCliente();
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(40000);
console.log(pedro.nombreClienteSaldo());