/* Ejemplo de consultar datos desde un archivo .JSON con fetch API */

/* JSON es  JavaScript Object Notation. 
    la sintaxis literal del objeto JSON se ve así:
        {
            “key”:“value”,
            “key”:“value”,
            “key”:“value”.
        }
*/

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos (){
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta =>{
            console.log('respuesta :>> ', respuesta);
            return respuesta.json();
        }).then(resultado =>{
            console.log('resultado :>> ', resultado);
            mostrarHTML(resultado); //Pasando los datos del JSON a una funcion
        })
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>

    `;
}