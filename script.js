// Funzioni varie
const spawnCell = () => {
    const singleCell = document.createElement('div');
    singleCell.classList.add('cell');
    return singleCell;
};

//recupero elementi dal dom
const grid = document.getElementById('grid')
const playButton = document.getElementById('playbutton')

//altre opzioni di preparazione

const rowGrid = 10;
const colGrid = 10;
const fullGrid = rowGrid * colGrid;

//Imposto la grid inizialmente come invisibile

grid.style.display = 'none';

// ! Creazione delle celle con ciclo iterativo
for (let i = 0; i < fullGrid; i++ ){
    const singleCell = spawnCell(); // Creazione della cella tramite la funzione

    singleCell.textContent = i + 1;
  
    singleCell.addEventListener('click', function() { //Gestione della classe 'clicked'
        singleCell.classList.toggle('clicked');
        console.log(i + 1); //Stampa in console del numero al click come richiesto in traccia
    });
    grid.appendChild(singleCell) // Stampa in pagina
}
// ! Evento del click e apparizione della griglia

playButton.addEventListener('click', function () {
    grid.style.display = 'flex'; // Mostra la griglia cambiando lo stile display
});