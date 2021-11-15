// For Loop

// for( let i =0; i < 10; i++ ) {
//     console.log(i);
// }

// for( let i =0; i <= 100; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(`El numero ${i} es par`);
//     }
//     else {
//         console.log(`El numero ${i} es impar`);        
//     }
// }

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

for(let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre )
}


//While Loop

// let i = 1; //indice

// while(i <= 100) {  //condicion
//     if(i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`)
//     } else{
//         console.log(`El numero ${i} es IMPAR`)
//     }

//     i++; //incremento
// }

// Do While Loop    primero se ejecuta 1 vez aunque la condicion no se cumpla diferencia de los otros
let i = 0;

do{
    console.log(i)

    i++;
} while(i < 10);