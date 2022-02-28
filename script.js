//  l'utente da 2 numeri e bisogna specificare quale sia il magiore


 function snackFunction1(){

    let num1 = document.getElementById('snackFirstOne').value;
    let num2 = document.getElementById('snackFirstTwo').value;


    if (parseInt(num1) > parseInt(num2)){
        document.getElementById('snackFirstTree').innerHTML=`il valore maggiore è ${num1} del primo valore`;
    } else if (parseInt(num2) > parseInt(num1)){
        document.getElementById('snackFirstTree').innerHTML=`il valore maggiore è ${num2} del secondo valore`;
    }else {
        document.getElementById('snackFirstTree').innerHTML='sono valori di pari valore';
    }           
}

// ---------------------------------------

// l'utente inserisce 2 parole in successione con 2 prompt. il software stampa prima la parola più lunga, poi la più corta


function snackFunction2(){
    let word1 = document.getElementById('snackTwoOne').value;
    let word2 = document.getElementById('snackTwoTwo').value;

    if (word1.length > word2.length){
        document.getElementById('snackTwoTree').innerHTML=`la parola più lunga è :${word1} la più corta è :${word2}`;
    } else if (word1.length < word2.length){
        document.getElementById('snackTwoTree').innerHTML=`la parola più lunga è :${word2} la più corta è :${word1}`;
    }else {
        document.getElementById('snackTwoTree').innerHTML=`le parole sono lunghe uguali`;
    }
}
// --------------------------------------
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


function snackFunction3() {
    
    let num = 0;
    const containerNumberShots = [];
    const containerNumberEven =[];

    for (let i = 0; i < 10; i++) {
        const newNum = parseInt(prompt(`inserisci numero`));
        num += newNum;

        if ( newNum%2 == true ) {
        containerNumberShots.push(newNum);
        }else {
        containerNumberEven.push(newNum);
        }

        document.getElementById(`snackFiveTree`).innerHTML=`hai inserito ${containerNumberShots.length} numeri dispari mentre ne hai inseriti ${containerNumberEven.length} pari ` ;

    }

    document.getElementById(`snackTreeTree`).innerHTML=`la somma dei 10 numeri che ti ho chiesto prima è ${num}`;
}



// -------------------------------------

// Snack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.
const invited = [ "Mauro","henri", "Chiara","Sidra","Alessandro","megamen","superman"];

function snackFunction4() {
    for (let i = 0; i < invited.length; i++) {
        let namePrompt = document.getElementById(`snackfourOne`).value;

        if (  namePrompt === invited[i]) {
            document.getElementById(`snackFourTree`).innerHTML=`sei tra gli invitati ben arrivato ${namePrompt}`;
        } else{
            document.getElementById(`snackFourTree`).innerHTML=`non sei il benvenuto ${namePrompt}`;
        }

    }
}



// --------------------------------------------------------
// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


// è stato fuso con lo snack 3




// -------------------------------------------------
// Snack 6
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

function snackFunction6() {
    

    const userNumber = prompt(`inserisci il tuo numero a 4 cifre`);
    let fourNumber = 0;

    for (let separated = 0; separated < userNumber.length; separated++) {
        fourNumber =  fourNumber + parseInt(userNumber[separated]);
        
    }
    document.getElementById(`snackSixTree`).innerHTML=`la somma della tua cifra frammentata è ${fourNumber}`

}


// Snack 1.9 (quello visto a lezione)
// Calcola la somma e la media dei primi 10 numeri.// let num = 0;

let upNum = 0;
let media1 = upNum / 10;
for (let increase = 0; increase < 10; increase++) {
    upNum = upNum + increase ;
}
document.getElementById(`snackSevenTree`).innerHTML = `la somma di tutti i valori da 0 a 10 è ${upNum} la loro media è ${media1} `;
    


// versione con while

let numWhile = 0;
let i = 0; 
let media = 0;

while (i <= 10 ) {
    numWhile = numWhile + i;
    media = numWhile / i;

    i++
}

document.getElementById(`snackEigtTree`).innerHTML= `stessa cosa ma con while invece del for ${numWhile} , fa un processo in più la loro media è ${media} `

//------------------------------------------

// Snack 2.1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// const numeroUtente = []

// for (let volte = 0; volte < 5; volte++) {
//     newNumber = prompt(` inserisci un numero , valore numero : ${volte} `)
//     numeroUtente.push(newNumber)

// }

// document.querySelector(`body`).innerHTML= `${numeroUtente}`

// versione con while -----------------------------------

// const numeroUtente = [];
// let volte = 0 ;

// while (volte <= 5) {
//     newNumber = prompt(` inserisci un numero , valore numero : ${volte} `)
//     numeroUtente.push(newNumber)

//     volte++
// }

// document.querySelector(`body`).innerHTML= `${numeroUtente}`


// --------------------------------------------------
// Snack 2.2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// let numberPPP = prompt( `digita un numero`);

// if (numberPPP % 2 === true) {
//     alert(` ${numberPPP} `); 
// }else {
//     let stamp = parseInt(numberPPP) + 1;
//     alert (stamp)
// }
    

// -----------------------

// Snack 2.3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// const cognomi = [" di pietro","canile","jumangi","tomson","anderson","morganti" ];
// const nomi = ["luca","lucia","nemo","matilda","romeo","daniele"];

// const nomiFalsi = [];

// let media = cognomi.length + nomi.length %2;


// for (let falsi = 0; falsi < 3; falsi++) {
//     let random = Math.floor(Math.random()* media )

//     nomiFalsi.push(`${cognomi[random]} ${nomi[random]}`)

// }

// alert(nomiFalsi)