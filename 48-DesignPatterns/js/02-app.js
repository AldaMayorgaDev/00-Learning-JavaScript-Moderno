/* Constructor Pattern */
/*  Básicamente en este patron de diseño se utiliza una clase base que sirve como molde para que las demas clases hereden sobre esta.

    Es decir, una clase principail y sobre ella va a ir heredando las demas y van utilizandola como base, en otros lenjuajes se les conoce como clases abstractas
*/


class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{ //Cliente hereda de Persona
    constructor(nombre, email, empresa){
        super(nombre, email); //Hace referencia a los atributos de la clase padre
        this.empresa = empresa;
    }
}

const cliente1 = new Cliente('Miguel', 'Cliente@cliente.com', 'Coca-cola inc');
const persona1 = new Persona('Juan', 'juan@gmail.com');

console.log('cliente1', cliente1);
console.log('persona1', persona1)