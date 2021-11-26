// jsnack2
// In un array sono contenuti i nomi degli invitati 
// alla festa del grande Gatsby, chiedi all’utente il
//  suo nome e comunicagli 
//  se può partecipare o no alla festa.


const lista_invitati = ["luca","chiara","gerry","paolo","lavinia", 
"antonio","gianriccardo","fran"];


//ciclo while 

let nome_utente = prompt("inserisci il tuo nome");

i = 0;

entrata = false;

while (i < lista_invitati.length || entrata == true) {
    i++;
    if (nome_utente == lista_invitati[i]) {
        entrata = true;  
    }
    
    console.log(i);
    
}

if (entrata == true) {
    document.writeln("puoi entrare");
} else {
    document.writeln("non puoi entrare");
}

console.log (entrata);
