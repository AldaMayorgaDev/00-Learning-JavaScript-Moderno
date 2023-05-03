/* Mixin Pattern */

/* Es una forma e agrega funciones a una clase una vez que ha sido creada */

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}


const funcionesPersona={
    mostrarInfo(){
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

//Añadir funcionesPErsona a la clase Persona
Object.assign(Persona.prototype,funcionesPersona);



const cliente = new Persona('Aldahir', 'alda@gmail.com')

console.log('cliente', cliente)
cliente.mostrarInfo();
cliente.mostrarNombre();