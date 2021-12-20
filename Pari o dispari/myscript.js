// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let inserisciPariDispari = prompt("inserisci pari o dispari");
let inserisciNumero = parseInt(prompt("inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let NumeroComputer = Math.floor(Math.random() * 5)+1;

// Sommiamo i due numeri
let totale = inserisciNumero + NumeroComputer;


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispariFunction(){
   if(totale%2==0 && inserisciPariDispari=="pari"){
      console.log("Pari, hai vinto!")
      document.writeln("Pari, hai vinto!")
   }
   else if(totale%2!=0 && inserisciPariDispari=="dispari"){
        console.log("Dispari, hai vinto!")
        document.writeln("Dispari, hai vinto!")
   }
   else if(totale%2!=0 && inserisciPariDispari=="pari"){
        console.log("Dispari, hai Perso")
        document.writeln("Dispari, hai perso!")
   }
   else if(totale%2==0 && inserisciPariDispari=="dispari"){
       console.log("Pari, hai perso")
       document.writeln("Pari, hai perso!")
   }
}

// Dichiariamo chi ha vinto.
console.log(inserisciPariDispari);
console.log(inserisciNumero);
console.log(NumeroComputer);
console.log(totale);
console.log(pariDispariFunction());
