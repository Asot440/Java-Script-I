/* Los objetos son la pieza principal en JavaScript, en lugar de 
crear diferentes variables:*/

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable 


// si deseas agregar más propiedades puedes hacerlo de la siguiente forma

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el último elemento puede o no tener la ,
}

console.log(producto);