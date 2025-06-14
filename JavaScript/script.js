//   CREO LE CELLE
const generateCells = function () {
  const cella = document.getElementById('casella');
  for (i = 1; i <= 76; i++) {
    const oneCell = document.createElement('div');
    oneCell.classList.add('cell');
    const cellValue = document.createElement('h3');
    cellValue.innerText = i;
    oneCell.appendChild(cellValue);
    cella.appendChild(oneCell);
  }
};
generateCells();

let arr = []; // Qui vanno i numeri generati
let random;
const randomNum = document.getElementById('genera');
const myForm = document.getElementById('generateForm');
// Genero numeri casuali al click del bottone
randomNum.addEventListener('click', (e) => {
  e.preventDefault();
  // Chiedo all'array arr se che all'arrivo di 5 numeri allora si ferma
  if (arr.length === 5) {
    alert('HAI GENERATO TUTTI I NUMERI');
    return;
  }
  // Faccio un controllo dei numeri generati e che non escano più di 1 volta
  do {
    random = Math.ceil(Math.random() * 5);
  } while (arr.includes(random));

  arr.push(random);

  myForm.reset();
});
