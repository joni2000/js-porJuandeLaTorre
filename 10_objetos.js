// Objetos 

const producto = {  //lo mismo que arriba pero lo crea como objeto
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

console.log(producto);

// console.log(producto.precio); //para acceder a la variable precio

// agregar propiedades
producto.imagen = "imagen.jpg"; //para crear una nueva variable dentro del objeto

//eliminar propiedades
delete producto.disponible;
