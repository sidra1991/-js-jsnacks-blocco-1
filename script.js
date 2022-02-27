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