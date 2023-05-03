/**Metodos de propiedad: son funciones que su sintaxis es igual al metodo */

const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}.`)
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    reproducirPlaylist : function(nombrePlaylist){
        console.log(`Reproducciendo Playlist: ${nombrePlaylist}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();


/*Añadir metodo de propiedad al objeto
    nombreObjeto.nombreMetodoPropiedad = function (){lo que tiene que hacer}
*/

reproductor.borrar = function(nombre){
    console.log(`Borrando canción...${nombre}`);
}

reproductor.borrar('Over to rainbow');


//Agregar dos metodos mas:  Crear una playlist con un nombre de playlist y otro de reproducir una playlist con xnombre()


reproductor.crearPlaylist= function(nombrePlaylist){
        console.log(`Creando playlist: ${nombrePlaylist}`)
}

reproductor.crearPlaylist('Cumbias');
reproductor.reproducirPlaylist('Rock de los 80\`s');