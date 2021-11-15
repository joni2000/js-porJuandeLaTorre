const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medida = {
    peso: "1kg",
    medida: "1m",
}

// reset opereitor    para unir objetos 
const nuevoProducto = {...producto, ...medida};

console.log(producto);
console.log(nuevoProducto);