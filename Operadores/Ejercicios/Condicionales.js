var numero1 = parseInt(prompt("Introduce el primer número:",0));
var numero2 = parseInt(prompt("Introduce el segundo número:",0));

console.log(`Numero uno: ${numero1}, Numero dos: ${numero2}`)

if(numero1===numero2){
    alert("Los numeros son iguales");
}
else if(numero1>numero2){
    alert(`El número mayor es ${numero1}`);
    alert(`El número menor es ${numero2}`);
}
else if(numero2>numero1){
    alert(`El numero mayor es: ${numero2}`);
    alert(`El numero menor es: ${numero1}`);
}
else{
    alert("Introduce numeros correctos");
}

/*alerta=numero1==numero2?"Los numeros son iguales":"Los numeros son diferentes"
alert(alerta);*/

