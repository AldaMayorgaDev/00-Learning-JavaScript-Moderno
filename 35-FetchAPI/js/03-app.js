/* Ejemplo de consultar datos desde un archivo .JSON con fetch API */
/* El JSON viene como un array[] */

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta =>{
            console.log('respuesta :>> ', respuesta);
            return respuesta.json();
        }).then(resultadoObtenido =>{
            console.log('resultadoObtenido :>> ', resultadoObtenido);
            mostrarHTML(resultadoObtenido);
        })
}

function mostrarHTML(empleadosArray){
    const contenido = document.querySelector('.contenido');

    let html = '';

    /* Se itera el arreglo */
    empleadosArray.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado; //Se destructura el objeto empleado


        /* Se concatena el html */
        html += `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>**************************</p>
        `;

        /* Se insertan los datos en el HTML */
        contenido.innerHTML = html;
    });
}