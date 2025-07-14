const container = document.querySelector("#container");
const sizeInput = document.querySelector("#sizeInput");
const colorInput = document.querySelector("#colorPicker");
const eraser = document.querySelector(".fa-eraser");
let currentColor = "#000000";

let isDrawing = false;
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);


let gridInput = parseInt(sizeInput.value);
createGrid(gridInput);

function createGrid(gridSize){
    container.innerHTML = ""; 

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const totalCells = gridSize * gridSize;

    for(let i = 0; i <totalCells ; i++){
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.addEventListener("mouseover", () => {
          if (isDrawing) {
            cell.style.backgroundColor = currentColor;
            }
      });



      container.appendChild(cell);
    }
}

sizeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    gridInput = parseInt(sizeInput.value);

    if (!isNaN(gridInput) && gridInput > 0 && gridInput <= 150) {
      createGrid(gridInput);
    } else {
      alert("Please enter a valid positive number that does not exceed 150.");
    }
  }
});

colorInput.addEventListener("input", (e) =>{
   currentColor = colorInput.value;
});

eraser.addEventListener("click", () => {
  currentColor = "#d3d3d3";
});

