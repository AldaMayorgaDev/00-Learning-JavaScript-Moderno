/* Herencia en prototypes 

    En el objeto que queremos que herede

    nombreObjetoPadre.call(this, atributoHeredar, atributoHeredar);


    Siempre se clona los protoypes antes de instanciar
*/

function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}


//Creación de prototype tipoCliente
Cliente.prototype.tipoCliente = function (){
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


//Constructor del objeto

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); //Con esto se pasan los prototypes de cliente a persona

Persona.prototype.constructor = Cliente;
//Instanciar objeo Persona

const aldahir = new Persona('Aldahir', 5000, 123129 );
console.log(aldahir)