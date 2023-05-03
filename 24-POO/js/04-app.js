/* PRopiedades privadas */

/* Existen atributos PRivate, public y protected 

    Public -> puedes acceder dentro de la clase o en el objeto
    Private -> solamente se puede acceder dentro de la clase


    para hacer privada un atributo:
    #nombrePropiedad;
*/

//Class Declaration
class Cliente{

    //Propiedad privada
    #nombre;
    #direccion;

    //Constructor
    constructor (nombre, saldo){
        //Valores que tendra el objeto cuando sea instanciado
        this.#nombre = nombre;
        this.saldo = saldo;

    }

    //metodo
    mostrarInformarcion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    //Propiedad estatica, no necesita que se instancie, se puede acceder a ella solo con el nombredeClase.nombrePropiedadEstatica();, pertenece a la clase no al objeto
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

    setDireccion(direccion){
        this.#direccion = direccion;
    }

    getDireccion(){
        return this.#direccion;
    }
}


//Instanciar clase
const aldahir = new Cliente('Alda', 400);


/* Asginando valores a propiedad privada con set */
aldahir.setDireccion('Arista 4');

/* Obteniendo valores de propiedad privada con get */
console.log('getDireccion: ',aldahir.getDireccion());

console.log('aldahir :>> ', aldahir);