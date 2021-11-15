// objetos
const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// forma anterior de hacerlo
const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


//destructuring de objetos
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

