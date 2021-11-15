//POO

//Object Literal
const producto = {
    nombre: 'tablet',
    precio: 500
}

//Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('monitor curvo de 49"', 800);
const producto3 = new Producto('mouse', 300);

function formatearProducto(producto) {
    return `El producto${producto.nombre} tiene un precio $${producto.precio}`;
}


console.log(producto2); 
console.log(producto3);

console.log( formatearProducto(producto) )

// prototype es para crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto${producto.nombre} tiene un precio $${producto.precio}`;
}

console.log(console)
