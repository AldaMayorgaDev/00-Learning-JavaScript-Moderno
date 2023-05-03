/* Ejemplo de consultar datos desde una API con fetch API */
/* https://picsum.photos/list */
/* Instalar una extension para mejor formato a la ahora de ver el API en el navegador
JSONView
*/


const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta =>{
            console.log(respuesta);
            console.log(respuesta.status);

            return respuesta.json();
        })
        .then(resultado =>{
            console.log('Resultado :>> ', resultado);
            mostrarHTML(resultado);
        })
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');
    let html = '';

    datos.forEach(perfil => {
        const {author, post_url, file_name} = perfil;

        html += `
        <p>Autor: ${author}</p>
        <a href= "${post_url}" target = "_blank"> Ver Imagen: ${post_url}</a>
        `;
       
    });

    /* Renderizar solo los primeros 10 resultados de la api */
      /* const primeros10 = datos.slice(0, 10);
      console.log('primeros10 :>> ', primeros10);

      primeros10.forEach(perfil=>{
        const {author, post_url, file_name} = perfil;

        html += `
        <p>Autor: ${author}</p>
        <a href= "${post_url}" target = "_blank"> Ver Imagen: ${post_url}</a>
        `;
      }); */


      /* Renderizar solo los ultimos 10 resultados de la api */

     /*  const ultimos10 = datos.slice((datos.length - 9), datos.length);
      console.log('ultimos10 :>> ', ultimos10);

      ultimos10.forEach(perfil=>{
        const {author, post_url, file_name} = perfil;
        html += `
        <p>Autor: ${author}</p>
        <a href= "${post_url}" target = "_blank"> Ver Imagen: ${post_url}</a>
        `;
    }) */
      

    contenido.innerHTML = html;
}