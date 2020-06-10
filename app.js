
const gridContainer = document.getElementById("grid-container");
let totalCells = 0;
const cells = document.getElementsByClassName("grid-cell");
const clearButton = document.getElementById("clear-button");
const colorPenButton = document.getElementById("colors");
const blackPenButton = document.getElementById("black");
let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

const size16Button = document.getElementById("btn16");
const size32Button = document.getElementById("btn32");
const size64Button = document.getElementById("btn64");
const size128Button = document.getElementById("btn128");

// Creates a default grid sized 16x16
function fillGridWithCells(numberOfRowsToFill) {
    totalCells = (numberOfRowsToFill * numberOfRowsToFill);
    makeCells(numberOfRowsToFill);
}

// Takes (rows, columns) input and makes a grid
function makeCells(cellNum) {

    const numberOfCells = (cellNum * cellNum);

    // Creates rows
    for (var cellIndex = 0; cellIndex < numberOfCells; cellIndex++) {

        let newCell = document.createElement("div");
        gridContainer.appendChild(newCell).className = 'grid-cell ' + cellIndex;
    };

    const cells = document.getElementsByClassName("grid-cell");

    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        cells[cellIndex].addEventListener('mouseenter', function (e) {
            this.style.backgroundColor = generateRandomColor()
        });
    }

};


//clears the grid
function clearCells() {
    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        cells[cellIndex].style.backgroundColor = "white";
    }
}

clearButton.addEventListener('click', function () { clearCells() });

function newGridSize(newGridSize) {
    var element = document.getElementById("grid-container");

    if (newGridSize === 32) {
        element.classList.remove("grid-size-16");
        element.classList.remove("grid-size-64");
        element.classList.remove("grid-size-128");

        element.classList.add("grid-size-32");
        fillGridWithCells(32)
    }
    else if (newGridSize === 64) {
        element.classList.remove("grid-size-16");
        element.classList.remove("grid-size-32");
        element.classList.remove("grid-size-128")

        element.classList.add("grid-size-64");

        fillGridWithCells(64)
    }
    else if (newGridSize === 128) {
        element.classList.remove("grid-size-16");
        element.classList.remove("grid-size-32");
        element.classList.remove("grid-size-64")

        element.classList.add("grid-size-128");
        fillGridWithCells(128)
    }
    else {
        element.classList.remove("grid-size-32");
        element.classList.remove("grid-size-64");
        element.classList.remove("grid-size-128")

        element.classList.add("grid-size-16");
        fillGridWithCells(16)
    }
}

size16Button.addEventListener('click', function () {
    newGridSize(16)
});
size32Button.addEventListener('click', function () {
    newGridSize(32)
});
size64Button.addEventListener('click', function () {
    newGridSize(64)
});
size128Button.addEventListener('click', function () {
    newGridSize(128)
});

function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

//document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94

//black pen
blackPenButton.addEventListener('click', function () { drawBlackPen() });

function drawBlackPen() {
    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        cells[cellIndex].addEventListener('mouseenter', function (e) {
            this.style.backgroundColor = "black"
        });
    }
}

drawBlackPen()
drawColorPen()

//random color
colorPenButton.addEventListener('click', function () { drawColorPen() });

function drawColorPen() {
    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        cells[cellIndex].addEventListener('mouseenter', function (e) {
            this.style.backgroundColor = generateRandomColor()
        });
    }
}
