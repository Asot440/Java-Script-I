/*El programa evalua la cadena que se declara en la funcion ContarCaracteres y devuelve en la consola la cadena y cuantos caracteres tiene la cadena, asi mismo, si no se declara ninguna cadena en la funcion develve en la consola la leyenda "No ingresaste ninguna cadena"*/


function ContarCaracteres(cadena=""){
if(cadena.length===0)
    console.log("No ingresaste ninguna cadena")
else{
    caracter=cadena.length;
    console.log(`La cadena ${cadena} tiene ${caracter} caracteres.`)
}   
}

ContarCaracteres();
ContarCaracteres("Hola Mundo!");

let ContarCaracteres2 => ()