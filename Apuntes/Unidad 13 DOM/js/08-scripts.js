// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..


const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log(navegacion.childNodes);

// también existe algo llamado Children
console.log(navegacion.children)

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

