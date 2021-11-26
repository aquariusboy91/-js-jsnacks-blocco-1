// Il software deve chiedere per 10 volte all’utente
//  di inserire un numero. Il programma stampa la somma
//   di tutti i numeri inseriti.



// CICLO WHILE
// let i = 0; 

// sum = 0; 

// while (i < 10) {
//     i++;
//     numero = parseInt(prompt("inserisci un numero"));
//     sum += numero;
    
// }

// console.log(sum);


//CICLO FOR
sum = 0 
for(i = 0; i < 10; i++) {
    numero = parseInt(prompt("inserisci il numero"))
    sum += numero; 
}

console.log(sum);