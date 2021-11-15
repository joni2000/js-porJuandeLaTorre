// ARROW FUNCTIONS

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');


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
meses.forEach (mes => {
    if(mes == "marzo") {
        console.log("marzo si existe");  //para comprobar si un elemento existe 
    }
});

let resultado;
//some ideal para arreglos de objetos
resultado = carrito.some(producto => producto.nombre === 'celular');

// reduce
resultado = carrito.reduce( (total, producto) => total+ producto.precio, 0);

//filter
resultado = carrito.filter(producto =>  producto.precio > 400);

resultado = carrito.filter (producto => producto.nombre !== 'celular');

console.log(resultado);