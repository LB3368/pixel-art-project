//setting variables

let height, width, color;
const gridForm = document.getElementById("sizePicker");
const gridRow = document.getElementById("inputHeight");
const gridCell = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");

const setWidthColor = function(event) {
    event.target.style.backgroundColor = colorPicker.value;
}

//event listener added to select grid size
const gridMake = document.getElementById('sizePicker');

// Adding code here

//Draws grid
function makeGrid(row, cell) {
    for (let i = 1; i < row; i++) {
        const tableRow = document.createElement("tr");
        for (let j = 1; j < cell; j++) {
            const tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        pixelCanvas.appendChild(tableRow);
    }
}


//add color
pixelCanvas.addEventListener('click', function(event) {
    color = colorPicker.value;
    event.target.style.backgroundColor = colorPicker.value;
})

gridForm.addEventListener('click', (event) => {
    gridForm.style.backgroundColor = color.value;
});

const handleSubmit = function(event) {
    event.preventDefault();
    makeGrid();
}

gridForm.addEventListener('submit', handleSubmit);













gridMake.addEventListener('submit', function (event) {
    event.preventDefault();
    //Size input

    const gridRow = document.getElementById('inputHeight').value;
    const gridCell = document.getElementById('inputWidth').value;
    makeGrid(gridRow, gridCell);
});

