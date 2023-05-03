/* Composition
    Viene a ser como una alternativa a las clases 

    Composition es basicamente escribir muchas funciones e ir utilizando tus objetos, lo que creas que vas a necesitar
*/

//Funcion general que se copiara al objeto
const obtenerNombre = info =>({
    mostrarNombre (){
        console.log(`Nombre: ${info.nombre}`)
    }
})


const guardarEmail =info =>({
    agregarEmail(email){
        console.log(`Guardando email en ${info.nombre}`)
        info.email = email;
    }
})

const obtenerEmail = info =>({
    mostrarEmail(){
        console.log('email', info.email)
    }
})

function Cliente(nombre, email, empresa) {
    let info ={
        nombre,
        email,
        empresa
    }
    //Copiando al objeto tanto el bojeto info, como la funcion general obtenerNombre
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
        )
}

function Empleado(nombre, email, puesto) {
    let info ={
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
        )
}

const cliente = new Cliente('Aldahir', null, 'Globant');
cliente.mostrarNombre(); //Accediendo a la funcion dentro de la funcionGeneral del objeto
cliente.agregarEmail('cliente@cliente.com')
cliente.mostrarEmail();
console.log('cliente', cliente)


const empleado = new Empleado('Pedro', null, 'Programador');
empleado.agregarEmail('empleado@empleado.com')
empleado.mostrarEmail();
console.log('empleado', empleado)
empleado.mostrarNombre();