/* Closures */

/* Los Closures o clausulas van a compñados muchas veces de algo llamado el scoope */
/* Un closure es cuando una función es capaz de recordar y acceder a una varibale de otroscope, incluso cuando la función es ejecutada por fuera del lexical scope. */


/* Los closure son creados cada vex que se crea un funcion y un closure es una forma de acceder  a una  funcion o valor desde el exterior*/


const obtenerCliente =()=>{
    const nombre = "Aldahir";

    function muestraNombre() {
        console.log('nombre', nombre)
    }

    return muestraNombre; //Este es un closure ya que permite sacar la funcion muestraNombre
}

const cliente = obtenerCliente();

cliente();