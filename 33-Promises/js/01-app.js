/* Callbacks */

/* Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. */
/*  la forma de crear una función callback es pasándola como parámetro a otra función, y luego llamarla de vuelta justo después de que haya ocurrido algo o se haya completado alguna tarea.  */


const paises = ['Francia', 'España', 'Portugal', 'Argentina', 'Inglaterra', 'México'];

/* Se crear una funcion que muestra los paises despues de un segundo */
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log('pais :>> ', pais);
        })
    }, 1000);
}


function nuevoPais(pais, callback) { //La funcion recibe dos parametros, 1 pais = string y callback que seria una funcion
    setTimeout(() => {
        paises.push(pais); //Primero se inserta el pais en arrelgo
        callback(); //Despues se ejecuta la funcion que se paso como parametro
    }, 2000);
}



mostrarPaises();


nuevoPais('Alemania', mostrarPaises); //Aqui se manda llamar la funcion nuevoPais, dandole el string y la funcion mostrarPaises como parameto

