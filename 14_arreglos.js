// Arreglos o Arrays     para agrupar objetos similares como si fuera un carrito

const numeros = [10,20,30,40,50];  //los arreglos siempre van con corchetes
 
console.table(numeros);

const meses = ["enero", "febrero ", "marzo", "abril", "mayo"]; 

console.table(meses);

const arreglo = ["hola", 10, true, "si", {Nombre: "joni", trabajo: "developer"}, [1,2,3]]; //un arreglo puede contener todotipo de valores 

console.table(arreglo);

//acceder a los valores de un arreglo 
console.log(numeros[4]); // se selecciona el index o indice

//conocer la extension de un arreglo  
console.log(meses.length);

//iterador
numeros.forEach( function(numero) {
    console.log(numero)
})