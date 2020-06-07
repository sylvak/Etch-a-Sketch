
const gridContainer = document.getElementById("grid-container");
let totalCells = 0;
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
};

fillGridWithCells(16)

const cells = document.getElementsByClassName("grid-cell");

for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
    cells[cellIndex].addEventListener('mouseenter', function (e) {
        this.style.backgroundColor = "purple";
    });
}

//clears the grid
function clearCells() { 
    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        cells[cellIndex].style.backgroundColor = "white";
    }
}

const clear = document.getElementById("clear-button");
clear.addEventListener('click', function() {   clearCells() });



