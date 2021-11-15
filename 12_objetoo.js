"use strict"; //Correr JS de forma estricta
const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);  //vuelve a la variable del objeto una constante, es decir que no se puede modificar
// producto.imagen = "imagen.jpg";

Object.seal(producto); //la diferencia entre seal y freeze es que seal te permite modificar objetos existentes

console.log(Object.isFrozen(producto)); 

console.log(producto);