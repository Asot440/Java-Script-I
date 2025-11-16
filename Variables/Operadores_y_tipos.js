var numero1=7;
var numero2=15;

var suma=numero1+numero2;
var resta=numero1-numero2;
var division=numero1/numero2;
var multi=numero1*numero2;

/*alert("El resultado de la suma es: "+suma+"\nEl resultado de la resta es: "+resta+"\nEl resultado de la division es: "+division+"\nEl resultado de la multiplicacion es: "+multi);*/

var numero_entero=24;
var cadena_texto="Hola 'que' tal";
var verdadero_o_falso=true;
var numero_falso="33";

console.log(numero_entero+numero_falso);

console.log(parseInt(numero_falso))

console.log(numero_entero="24"+9)

const speed=120;
const message=speed>100?"Estas llendo muy rapido":"Bien, vas debajo del límite"
console.log(message)

var i=0

while(i<=10){
    console.log(i)
    i++;
}

for(var x=0; x<10; x++){
    console.log(x)
}

//For/of, se utiliza para arreglos o strings
let datos=[1,2,3,4,5,6,7,8,9], sum=0
for(let elemento of datos){
    sum+= elemento
}

console.log(sum)

//For/in, se utiliza para propiedades de un OBJETO.
var libro={ /*Uso de llaves y dos puntos para objetos*/
    titulo:"Javascript",
    autor:"David Flanagan",
    numPag:1245,
    editorial:"Santillana",
    precio:"10.45"
}

for(let prop in libro){
    console.log("La propiedad "+prop+" contiene:"+libro[prop]);
}

//For con break, cuando la iterante es = 3 interrumpe el bucle.
for(let j=0;j<10;j++){
    if(j===3)break
    console.log(`Number: ${j}`)
}

//For con funcion continue, si la comparacion es verdadera salta la iteración y continua el ciclo.
for(let k=0; k<10; k++){
    if(k===3)continue
    console.log(`Number: ${k}`)
}