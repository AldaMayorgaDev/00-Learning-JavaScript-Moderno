
//Pasar el siguiente objeto de metodos de propiedad a arrow function
/* const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}.`)
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    reproducirPlaylist : function(nombrePlaylist){
        console.log(`Reproducciendo Playlist: ${nombrePlaylist}`)
    },
    
} */



const reproductor={

    reproducir: id=> console.log(`Reproduciendo Canción ${id}`),
    pausar: () => console.log(`pausando`),
    crearPlaylist: nombrePlaylist => console.log(`Creando Playlist llamada: ${nombrePlaylist}`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproduciendo playlist: ${nombrePlaylist}`),

    // Metodos de Propiedad Get y siguiente

    set nuevaCancion(nombreCancion){
        this.cancion = nombreCancion;
    },

    get obtenerCancion(){
        console.log(`El nombre de la cancion es: ${this.cancion}`)
    }
}


/**Accediendo con get y asignando con set */
reproductor.nuevaCancion= 'Runaways';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist('Musica para relajar');
reproductor.reproducirPlaylist('Kodemia');