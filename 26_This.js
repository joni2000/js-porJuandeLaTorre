// this 

const reservation = {
    nombre: 'juan',
    apellido: 'valdes',
    total: 2000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

 reservation.informacion();
