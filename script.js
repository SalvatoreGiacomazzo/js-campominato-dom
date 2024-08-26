/* GRIGLIA DINAMICA
Inserisci, al click del bottone play, una griglia 10x10 con ogni casella numerata.
 Quando l'utente clicca su qualsiasi casella, la suddetta cambia colore.

*/

/*TODO LIST
Recupera gli elementi dal DOM.
Genera le griglie e numerale da 1 a 100.
Rendile visibili in pagina.
Aggiungi l'evento del click e cambio colore.
Programma il bottone alla funzione di far apparire la griglia.
*/

//!PRIMO CLUSTER DI MILESTONE (FATTE TUTTE)
/*# MILESTONE 1 DONE
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata. 
#MILESTONE 2 DONE
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3 DONE
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4 DONE
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/


//? SECONDO CLUSTER DI MILESTONE
/*
MILESTONE 1
Creare un counter del punteggio, quando l'utente clicca su una cella, incrementare il punteggio.
Fare in modo di poter cliccare solo una volta sulle caselle.

MILESTONE 2
Generare 16 numeri casuali compresi tra 1 e 100
Stamparli in console per sicurezza.

MILESTONE 3
Se l'utente clicca su una delle 16 celle programmate come bombe, il gioco finisce, se non è una bomba incrementa il punteggio e prosegui la partita.

MILESTONE 4
Quando l'utente clicca su una cella, controllare se ci sono ancora celle (non bombe) disponibili, se non ci sono l'utente ha vinto
Termina la partita e segnala la vincita. 

MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
*/



// Funzioni varie
const spawnCell = () => {
    const singleCell = document.createElement('div');
    singleCell.classList.add('cell');
    return singleCell;
};

// Funzione che genera le bombe
const spawnBombs = (fullGrid, clusterBombs) => {
    const bombs = []; // Array delle 16 bombe

    while (bombs.length < clusterBombs) { // Ciclo fintanto che non abbiamo il numero desiderato di bombe
        const bombCell = Math.floor(Math.random() * fullGrid) + 1;

        if (!bombs.includes(bombCell)) {      //Impediamo la generazione dello stesso numero
            bombs.push(bombCell);
        }
    }

    return bombs;
}

//recupero elementi dal dom
const grid = document.getElementById('grid')
const playButton = document.getElementById('playbutton')
let playerScore = document.getElementById('score')

//altre opzioni di preparazione

const rowGrid = 10;
const colGrid = 10;
const fullGrid = rowGrid * colGrid;
playerScore = 0;
const clusterBombs = 16; 
const maxScore = fullGrid - clusterBombs;


//Imposto la grid inizialmente come invisibile

grid.style.display = 'none';

// ! Creazione delle celle con ciclo iterativo
for (let i = 0; i < fullGrid; i++ ){
    const singleCell = spawnCell(); // Creazione della cella tramite la funzione

    singleCell.textContent = i + 1;
   
    singleCell.addEventListener('click', function() { //Gestione della classe 'clicked'
    if (singleCell.classList.contains('clicked')) return; // Fermiamo la funzione per impedire punti infiniti
      
    


        singleCell.classList.toggle('clicked');
        console.log(i + 1); //Stampa in console del numero al click come richiesto in traccia
       // ! Gestione dello score
      playerScore++;
      console.log(playerScore)
      document.getElementById("score").innerHTML =  `${playerScore} ` //Stampa in pagina del punteggio

     if (playerScore === maxScore){
        alert('Congratulations, you survived! (refresh the page to play again)')
        document.getElementById("score").innerHTML =  `You won with ${playerScore} points! ` 
     }





      if (bombs.includes(i + 1)){   //Stampiamo in console un messaggio se viene cliccata una bomba
       singleCell.classList.add('bomb')
       
       alert('YOU STEPPED INTO A BOMB, RUN!! (refresh the page to play again)')
       document.getElementById("score").innerHTML =  `You lost with ${playerScore} points!` 
     }
         
     

    });
    grid.appendChild(singleCell) // Stampa in pagina
    
}
// ! Evento del click e apparizione della griglia

playButton.addEventListener('click', function () {
    grid.style.display = 'flex'; // Mostra la griglia cambiando lo stile display
});

// ! Inserimento delle bombe
const bombs = spawnBombs(fullGrid, clusterBombs);   
console.log(bombs)  //Stampa in console dei 16 numeri delle bombe




