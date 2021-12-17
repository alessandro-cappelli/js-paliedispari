// chiedere all`utente di inserire una parola 
let parola = prompt('inserisci una parola');

// crare una array
let parolaArr = [];

// dividere la parola
let parolaDivisa = parola.split('');

// push della parola divisa nell`array
parolaArr.push(parolaDivisa);
console.log(parolaArr);


// creare un array per la parola invertita
let parolaInvertitaArr = [];

// invertire la parola inserita 
let parolaInvertita = parolaDivisa.reverse('');

// push della parola invertita nell`array 
parolaInvertitaArr.push(parolaInvertita);
console.log(parolaInvertitaArr);



if(parolaArr=parolaInvertitaArr){
    console.log('PAROLA PALINDROMA');
}else{
    console.log('PAROLA NON PALINDROMA');
}
    

