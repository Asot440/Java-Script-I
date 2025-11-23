// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

//Map si puedo guardar el recorrido en un nuevo arreglo
const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `);

// For each no puede almacenar el recorrido en un nuevo arreglo
carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } `));

console.log(nuevoArray);
console.log(carrito);
// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map

