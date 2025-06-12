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
