//Parametros y argumentos 

function sumar(numero1 = 0, numero2 = 0) { //numero1 y numero2 son parametros   // = 0 es un parametro por default
    console.log(numero1 + numero2);  
}; 

sumar(10, 10); //argumentos o los valores reales
sumar(3, 3);
sumar(4, 5);
sumar(6, 10);


const sumar2 = function(numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar2(5, 10);