// jsnack2
// In un array sono contenuti i nomi degli invitati 
// alla festa del grande Gatsby, chiedi all'utente il
//  suo nome e comunicagli 
//  se può partecipare o no alla festa.


// const lista_invitati = ["luca","chiara","gerry","paolo","lavinia", 
// "antonio","gianriccardo","fran"];


// CICLO WHILE 

// let nome_utente = prompt("inserisci il tuo nome");

// i = 0;

// let entrata = false;

// //ciclo fintanto che non arrivo a fine lista_invitati
// //e l'entrata è false
// while (i < lista_invitati.length && entrata == false) 
// {
    
//     if (nome_utente == lista_invitati[i]) {
//         entrata = true;  
//     }
    
//     console.log(i); 
//     i++;
// }

// if (entrata == true) {
//     document.writeln("puoi entrare");
// } else {
//     document.writeln("non puoi entrare");
// }

// console.log (entrata);


//CICLO FOR 

const lista_invitati = ["luca","chiara","gerry","paolo","lavinia", 
"antonio","gianriccardo","fran"];

let nome_utente = prompt("inserisci il tuo nome");

let entrata = false; 

for (let i = 0; i < lista_invitati.length; i++) {
    if (nome_utente == lista_invitati[i]) {
        entrata = true; 
    }
}


console.log(lista_invitati.length);


if (entrata == true) {
    document.writeln("puoi entrare");
} else {
    document.writeln ("non puoi");
}


console.log(entrata);