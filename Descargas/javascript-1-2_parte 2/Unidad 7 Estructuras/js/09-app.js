/* Previamente vimos los operadores ternarios, 
llegan a ser muy útiles ya que te dan un código más simplificado, 
veamos como se utilizan...*/

const autenticado = false;
const puedePagar = true;


console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');


// El OR y el && también se pueden utilizar en el ternario

console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');



//if normal si usar terniario
if(autenticado){
    if(puedePagar){
        console.log('Si puede pagar');
    }
    else{
        console.log('esta autenticado pero no puede pagar');
    }
}
else{
    console.log('No esta autenticado');
}


// Ternario anidado...
console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pagar' : 'No esta autenticado');


// Jugar con los valores...

// En el siguiente capítulo vamos a ver los iteradores, en JavaScript hay varios, así que veamos algunos ejemplos...