/* Heredar una clase

    Sintaxis:

    class NombreClaseHijo extends NombreClasePadre{

    }

    NOTA: ClaseHijo hereda todo de ClasePadre
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

//Herencia

class Empresa extends Cliente{
    //Reescribiendo Constructor para agregar dos atributos mas
    constructor(nombre, saldo, telefono, rubro){
        super(nombre, saldo); //Busca estos atributos en el padre ya que se heradan y si queremos acceder a ellos con this.atributo marca un error.
        this.telefono = telefono;
        this.rubro = rubro;
    }


    //reescribiendo metodo, solo nombrarlo de la misma forma que en la clase padre y actualizarlo
    static bienvenida(){
        return `Bienvenido al cajero de empresas`;
    }
}

//Instanciar clase
const aldahir = new Cliente('Alda', 400);

//Intanciar clase heredada
const empresa = new Empresa ('Lala', 6000, 1000000, 'Lechera');
console.log('empresa :>> ', empresa);
console.log('empresa.mostrarInformacion :>> ', empresa. mostrarInformarcion());


//Cuando se tiene dos metodos o propiedades estaticas tanto en padre e hijo, se sobre escribe

console.log('Cliente.bienvenida() :>> ', Cliente.bienvenida());
console.log('Empresa.bienvenida() :>> ', Empresa.bienvenida());


