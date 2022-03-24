// Declarando as cores das paletas de cores
function random() {
  return Math.floor(Math.random() * (255 + 1)).toString();
}

const firstColor = `rgb(${random()}, ${random()}, ${random()})`;
const secondColor = `rgb(${random()}, ${random()}, ${random()})`;
const thirdColor = `rgb(${random()}, ${random()}, ${random()})`;
const firstPixelPalette = document.querySelector('.first-palette');
const secondPixelPalette = document.querySelector('.second-palette');
const thirdPixelPalette = document.querySelector('.third-palette');
firstPixelPalette.style.background = firstColor;
secondPixelPalette.style.background = secondColor;
thirdPixelPalette.style.background = thirdColor;

// Declarando variaveis:
const buttonsContainer = document.getElementById('buttons-container');
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.width = '200px';

// Criação do input de tamanho do board
function createInput() {
  const boardSize = document.createElement('input');
  boardSize.id = 'board-size';
  buttonsContainer.appendChild(boardSize);
  boardSize.type = 'number';
  boardSize.min = 1;
}

// Criação do botão para acionar o tamanho do board
function createButtonGenerateBoard() {
  const buttonGenerateBoard = document.createElement('button');
  buttonGenerateBoard.id = 'generate-board';
  buttonGenerateBoard.innerText = 'VQV';
  buttonsContainer.appendChild(buttonGenerateBoard);
}

// Criação do botão de limpar o board
function createCleanButton() {
  const cleanButton = document.createElement('button');
  cleanButton.id = 'clear-board';
  cleanButton.innerText = 'Limpar';
  buttonsContainer.appendChild(cleanButton);
}
// Criação do pixel board
function createPixelBoard(n) {
  const size = n * n;
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('li');
    pixel.className = 'pixel';
    pixel.style.background = 'white';
    pixelBoard.appendChild(pixel);
  }
}

// Chamando todas as funções de criar elementos
createInput();
createButtonGenerateBoard();
createCleanButton();
createPixelBoard(5);

// Criação de função para remover todos os pixels.
function removeAllPixels() {
  const pixel = document.getElementsByClassName('pixel');
  const aux = pixel.length;
  for (let k = aux - 1; k >= 0; k -= 1) {
    pixel[k].remove();
  }
}

// Criação de função para pintar todos os pixels de branco.
function cleanPixelBoard() {
  const cleanPixels = document.getElementsByClassName('pixel');
  for (let j = 0; j < cleanPixels.length; j += 1) {
    cleanPixels[j].style.background = 'white';
  }
}

// Criação de função criar um novo pixel board
function createNewPixelBoard() {
  removeAllPixels();
  const boardSize = document.getElementById('board-size');
  const corpo = document.getElementById('corpo')
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  pixelBoard.style.width = `${boardSize.value * 40}px`;
  corpo.style.width = `${boardSize.value * 40 + 150}px`;

  createPixelBoard(boardSize.value);
  cleanPixelBoard();
}

const elementBlack = document.querySelector('.color');
elementBlack.classList.add('selected');
const colorPalette = document.getElementById('color-palette');
let elementSelected = document.querySelector('.color.selected');

function colorSelect(event) {
  if (!event.target.className.includes('selected')) {
    elementSelected.classList.remove('selected');
    event.target.classList.add('selected');
    elementSelected = event.target;
  }
}

function changeColorPixel(event) {
  const aux = event.target;
  if (elementSelected.className.includes('black')) {
    aux.style.background = 'black';
  } else if (elementSelected.className.includes('first-palette')) {
    aux.style.background = firstColor;
  } else if (elementSelected.className.includes('second-palette')) {
    aux.style.background = secondColor;
  } else if (elementSelected.className.includes('third-palette')) {
    aux.style.background = thirdColor;
  }
}

const cleanButton = document.getElementById('clear-board');
const buttonGenerateBoard = document.getElementById('generate-board');

// Todos os addEventListener
// Criar um novo board (Botão VQV)
buttonGenerateBoard.addEventListener('click', createNewPixelBoard);

// Selecionar uma nova cor na paleta de cores
colorPalette.addEventListener('click', colorSelect);

// Trocar a cor de um elemento do board
pixelBoard.addEventListener('click', changeColorPixel);

// Pintar todos os pixels de branco (Botão limpar)
cleanButton.addEventListener('click', cleanPixelBoard);
