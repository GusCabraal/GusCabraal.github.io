function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
// Declarando variaveis:
const buttonsContainer = document.getElementById('buttons-container');
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.width = '200px';

// Declarando as cores das paletas de cores
const firstColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255);
const secondColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255);
const thirdColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255);
const firstPixelPalette = document.querySelector('.first-palette');
const secondPixelPalette = document.querySelector('.second-palette');
const thirdPixelPalette = document.querySelector('.third-palette');
firstPixelPalette.style.background = firstColor;
secondPixelPalette.style.background = secondColor;
thirdPixelPalette.style.background = thirdColor;

// Criando input tamanho do board
function createInput() {
    const boardSize = document.createElement('input');
    boardSize.id = 'board-size';
    buttonsContainer.appendChild(boardSize);
    boardSize.type = 'number';
    boardSize.min = 1;
}

// Criando botão alterar o tamanho do board
function createButtonGenerateBoard() {
    const buttonGenerateBoard = document.createElement('button');
    buttonGenerateBoard.id = 'generate-board';
    buttonGenerateBoard.innerText = 'VQV';
    buttonsContainer.appendChild(buttonGenerateBoard);
}

// Criando botão de limpar
function createCleanButton() {
    const cleanButton = document.createElement('button');
    cleanButton.id = 'clear-board';
    cleanButton.innerText = 'Limpar';
    buttonsContainer.appendChild(cleanButton);
}
// Criando pixel board
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

function removeAllPixels() {
    const pixel = document.getElementsByClassName('pixel');
    const aux = pixel.length;
    for (let k = aux - 1; k >= 0; k -= 1) {
        pixel[k].remove();
    }
}
function cleanPixelBoard() {
    const cleanPixels = document.getElementsByClassName('pixel');
    for (let j = 0; j < cleanPixels.length; j += 1) {
        cleanPixels[j].style.background = 'white';
    }
}

const buttonGenerateBoard = document.getElementById('generate-board');

function createNewPixelBoard () {
    removeAllPixels();
    let number;
    const boardSize = document.getElementById('board-size');
    if (boardSize.value === '') {
        alert('Board inválido!');
    }
    else if (boardSize.value < 5) {
        boardSize.value = 5;
    }
    else if (boardSize.value > 50) {
        boardSize.value = 50;
    }
    number = boardSize.value;
    pixelBoard.style.width = number * 40 + 'px';
    createPixelBoard(number);
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
    let newColor = elementSelected.style.background;
    if (elementSelected.className.includes('black')) {
        event.target.style.background = 'black';
    } else if (elementSelected.className.includes('first-palette')) {
        event.target.style.background = firstColor;
    } else if (elementSelected.className.includes('second-palette')) {
        event.target.style.background = secondColor;
    } else if (elementSelected.className.includes('third-palette')) {
        event.target.style.background = thirdColor;
    }
}

const cleanButton = document.getElementById('clear-board');

// Todos os addEventListener
buttonGenerateBoard.addEventListener('click', createNewPixelBoard); 
colorPalette.addEventListener('click', colorSelect);
pixelBoard.addEventListener('click', changeColorPixel);
cleanButton.addEventListener('click', cleanPixelBoard);