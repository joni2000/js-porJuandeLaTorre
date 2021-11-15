// ESTRUCTURAS DE CONTROL

const puntaje = 1000;

if(puntaje === 1000){         //se ejecuta solo si cumple la condicion de if
    console.log('Si el puntaje es 1000');
} else{
    console.log('El puntaje no es 1000');
}

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('El usuario puede pagar');
} else{
    console.log('No tiene suficiente dinero para pagar');
}

const rol = 'editor';

if(rol === 'administrador') {
    console.log('acceso a todo el sistema')

}else if(rol === 'editor'){
    console.log('Tienes acceso al 70% del sistema')
} else {
    console.log('no tienes acceso');
}