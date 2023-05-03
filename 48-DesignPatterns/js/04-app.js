/* Factory - Crea objetos basados en cierta condicion*/
/* 
    Es una forma de crear objetos basados en ciertas condiciones, es decir van a compartir algunos atributos pero con base a esas condiciones, esos atributos algunos se reutilizan pero otros son diferentes.
*/


class inputHTML{
    constructor(type, nombre){
        this.type = type;
        this.nombre = nombre;
    }

    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory{
    crearElemento(tipo, nombre){
        switch (tipo) {
            case 'text':
                return new inputHTML('text', nombre)
           
            case 'tel':
                return new inputHTML('tel', nombre)
        
            case 'email':
                return new inputHTML('email', nombre)
            default:
                break;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log('inputText.crearInput()', inputText.crearInput())

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log('inputText2.crearInput()', inputText2.crearInput())

const elemento3 = new HTMLFactory();
const inputEmail = elemento3.crearElemento('email', 'email-cliente');
console.log('inputEmail.crearInput()', inputEmail.crearInput())