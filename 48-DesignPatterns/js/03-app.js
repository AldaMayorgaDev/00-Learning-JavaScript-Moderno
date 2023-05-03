/* Singleton */
/* 
    Su caracteristica principa es que no te va a permiri crear multiples instancias de una misma clase. En cambio, siempre retorna el objeto instanciado

    Impide que la clasea sea instanciada mas de una vez.
*/
let instancia = null;

class Persona{
    constructor(nombre, email){
        if(!instancia){ //Varifica si instnacia no tiene nada, si no tiene nada crea el bojeto con esos valores
            this.nombre = nombre;
            this.email = email;
            instancia = this; //Asigna los valores de nombre, email a la instancia
        }else{
            return instancia //en caso contrario devuelve la isntancia
        }
    }
}

const persona1 = new Persona('Aldahir', 'aldmg_25@hotmail.');
console.log('persona1', persona1)

const persona2 = new Persona('Alda', 'aldmg_25@hotmail.'); // como la instancia ya fue creaada va a devolver los datos de persona1
console.log('persona2', persona2)