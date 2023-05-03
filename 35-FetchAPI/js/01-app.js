/* Ejemplo de consultar datos desde un archivo .txt */


const cargarTxtBtn =  document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/datos2.txt'; //Url del origen de los datos

    

    fetch(url) //fetch siempre recibe una url, ya sea con una variable o en un string 'http:www.gooogle.com/cualquiercosa'
        .then( respuesta =>{
            console.log('respuesta',respuesta);
            console.log('Status respuesta:',respuesta.status);
            console.log('StatusText respuesta:',respuesta.statusText);


            return respuesta.text(); //Devuelve el contenido del archivo
        })
            .then ( datos =>{ //Recibe el return de arriba
            console.log('datos: (return respuesta.text()):',datos);
            })
        .catch(error =>{
            console.log(error);
        })

}