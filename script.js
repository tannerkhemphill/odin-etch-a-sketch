const container = document.getElementById('container');

// Function to make the etch-a-sketch grid with the given number of rows x cols
function makeGrid(num) { 
    for (let i = 0; i < num*num; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid');
        container.appendChild(cell);
    };
    container.style.setProperty("grid-template-columns", `repeat(${num}, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${num}, 2fr)`);

    let grid = document.querySelectorAll('.grid');

    // Add event listeners to each grid cell to color it black when mouse passes over
    grid.forEach(cell => cell.addEventListener("mouseenter", function(e) {
    e.target.style.backgroundColor = "black";
}));
};

// Function to reset the etch-a-sketch board
function reset() {
    document.querySelectorAll(".grid").forEach((e) => e.parentNode.removeChild(e));
    let num = -1;
    while (isNaN(num) || num < 1 || num > 100) {
        num = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    };
    makeGrid(num);
};

// Display a 16x16 etch-a-sketch board upon page load
makeGrid(16);

const button = document.getElementById('btn');

// Add event listener to reset board button
button.onclick = () => reset();

