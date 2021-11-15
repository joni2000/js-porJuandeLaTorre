// metodos de arreglos 

const meses = ["enero", "febrero ", "marzo", "abril", "mayo"];

 const carrito = [
     {nombre: 'monitor de 20 pulgadas', precio: 500 },
     {nombre: 'television 50 pulgadas', precio: 700 },
     {nombre: 'tablet', precio: 300 },
     {nombre: 'audifonos', precio: 200 },
     {nombre: 'teclado', precio: 50 },
     {nombre: 'celular', precio: 500 },
     {nombre: 'bocinas', precio: 300 },
     {nombre: 'laptop', precio: 800 },
 ];

//forEach 
meses.forEach(function(mes){
    if(mes == "marzo") {
        console.log("marzo si existe");  //para comprobar si un elemento existe 
    }
});

//includes 
let resultado = meses.includes('marzo');  //para elementos planos

//some ideal para arreglos de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'celular'    
});

// reduce
resultado = carrito.reduce(function(total, producto){   //para sumar todo
    return total+ producto.precio
}, 0);

//filter
resultado = carrito.filter(function(producto){  //sirve para filtrar elementos
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){  //sirve para filtrar elementos
    return producto.nombre !== 'celular'
});



console.log(resultado);