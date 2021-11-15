// modificar arreglos
const numeros = [10,20,30,40,50];  //los arreglos siempre van con corchetes

//agregar indice o modificar arreglo
numeros[5] = 60;

//metodo push   agrega al final
numeros.push(70,80,90); //se utiliza pero no es buena practica
 
//metodo unshift    agrega al inicio
numeros.unshift(-10,-20,-30)

console.table(numeros);

//eliminar elementos de un arreglo
const meses = ["enero", "febrero ", "marzo", "abril", "mayo"]; 

// meses.pop(); //elimina el ultimo elemento
// meses.shift(); //elimina el primer elemento

meses.splice(2, 1); //elimina segun el indice del elemento

console.table(meses);

//rest operator o spread operator     buenas practicas
const nuevoArreglo = [...meses, "junio"];

console.log(nuevoArreglo);