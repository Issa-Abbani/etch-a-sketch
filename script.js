const container = document.querySelector("#container");

function createGrid(gridSize){
    container.innerHTML = ""; 

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const totalCells = gridSize * gridSize;

    for(let i = 0; i <totalCells ; i++){
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
    }
}

createGrid(16);