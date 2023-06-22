

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. [x]
// Ogni cella ha un numero progressivo, da 1 a 100. [x]
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. [x]
// Quando l'utente clicca su ogni cella, la cella cliccata 
// si colora di azzurro ed emetto un messaggio in console con il 
// numero della cella cliccata.


// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, 
// dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() 
// per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
// (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, 
// e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con 
// l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
// le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
// perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: 
// se il numero è presente nella lista dei numeri generati 
// - abbiamo calpestato una bomba 
// - la cella si colora di rosso e la partita termina.
//  Altrimenti la cella cliccata si colora di azzurro e
//   l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba
//  o quando raggiunge il numero massimo possibile di numeri consentiti
//   (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const cellContainer = document.querySelector('.container')

let startButton = document.getElementById('Start_button')

startButton.addEventListener('click', function() {

    
    for(let i = 1; i <= 100; i++){

        const cell = document.createElement('div')
        cell.classList.add('_cell')
        cell.append(i)
        cell.addEventListener('click', function(){
            this.classList.toggle('active')
            console.log(i)
        })
        cellContainer.append(cell)
    }

    const bombs = [];

    for (let j = 1; j <=16; j++){
        
        bombNumber = getRndInteger(1,100)
        console.log(bombNumber);
        if(bombs.indexOf(bombNumber) === -1){
            bombs.push(bombNumber)
        }
    }
    console.log(bombs)

    const bomb = document.querySelector('._cell')
    bomb.addEventListener('click', function(){
        
    })
})
