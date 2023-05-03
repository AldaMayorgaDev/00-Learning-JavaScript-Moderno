/* DEsign Patterns */

/* Son soluciones tipicas a problemas comunes en Desarrollo de SW, cada patron es como un plano que se puede personalizar para resolver un problema de diseño en el codigo 

Beneficios

    SOn coluciones a problemas de diseño de codigo
    Evitan la forma de escribir codigo "como cada quien entiende"

Categorias de Patrones

    De Creacion: Permiten crear objetos y permiten la reutilizacion del codigo.
    De estructura: Explican como deben comunicarse los objetos y clases en grandes proyectos.
    De Comportamiento: Se encargan de como se comportan y comunican los objetos
*/


/* ============================================================================================= */

/* Class Pattern */
/* 
    Basicamente es utilizar clases para la creacion de los objetos, las clases deben llevar un constructor.
    Patron de diseño de creacion, define como deben crearse los objetos
*/

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//Creacion de un objeto

const persona1 = new Persona('Aldahir', 'aldmg_25@hotmail.com');


console.log('persona1', persona1)