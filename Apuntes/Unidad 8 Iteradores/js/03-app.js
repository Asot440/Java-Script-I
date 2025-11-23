// Hola Mundo...

// 3 6 9 12 15 ...  Hola
// 5 10 15 20 25 ... Mundo
// 15 30 45 ... Hola Mundo

for(let i = 0; i < 100; i++  ) {
  if(i!==0){ 
    if(i % 15 === 0) {
        console.log(`${i} Hola Mundo`)
    } else if(i % 3 === 0) {
        console.log(`${i} Hola`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} Mundo`)
    } 
  }
}