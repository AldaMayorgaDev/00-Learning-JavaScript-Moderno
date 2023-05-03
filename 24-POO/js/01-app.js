/* Crear Clases 

Existen dos formas: class Declaration y Class Expression

Sintaxis

1.- Forma Class Declaration
class NombreClase{
    Cuerpo de la clase
}

2.- Forma Class Expression
const NombreCliente = class{
    cuerpo de la clase
}
*/


//Class Declaration
class Cliente{
    //Constructor
    constructor (nombre, saldo){
        //Valores que tendra el objeto cuando sea instanciado
        this.nombre = nombre;
        this.saldo = saldo;

    }

    //metodo
    mostrarInformarcion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //Propiedad estatica, no necesita que se instancie, se puede acceder a ella solo con el nombredeClase.nombrePropiedadEstatica();, pertenece a la clase no al objeto
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}



//Class Expression
const  Cliente2 = class{
  //Constructor
  constructor (nombre, saldo){
    //Valores que tendra el objeto cuando sea instanciado
    this.nombre = nombre;
    this.saldo = saldo;

}
}

//Instanciar clase
const juan = new Cliente('Juan', 400);
console.log('juan :>> ', juan);

//Instanciar clase
const aldahir = new Cliente('Alda', 400);
console.log('aldahir :>> ', aldahir);

//Acceder a metodo
console.log("Accediendo a metodo:", aldahir.mostrarInformarcion());

//Acceder a propiedad statica
console.log("Accediendo a propiedad statica", Cliente.bienvenida());