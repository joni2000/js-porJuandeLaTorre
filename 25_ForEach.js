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

//ForEach     solo puede ser utilizado en arreglos
carrito.forEach( producto => console.log(producto.nombre));




//map     solo puede ser utilizado en arreglos
const arreglo2 = carrito.map( producto => producto.nombre);  //utilizar para crear un nuevo arreglo
