//Metodos de propiedad

const reproductor = {
    reproducir : function(){
        console.log('Reproduciendo Canción')
    },
    pausar : function() {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproduciendoPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    }
}



reproductor.reproducir();
reproductor.pausar();
reproductor.crearPlaylist('trap')
reproductor.reproduciendoPlaylist('trap')