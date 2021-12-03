const container = document.getElementById('container');

function makeGrid(num) { 
    for (let i = 0; i < num*num; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid');
        container.appendChild(cell);
    };
    container.style.setProperty("grid-template-columns", `repeat(${num}, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${num}, 2fr)`);

    let grid = document.querySelectorAll('.grid');

    grid.forEach(cell => cell.addEventListener("mouseenter", function(e) {
    e.target.style.backgroundColor = "black";
}));
};

function reset() {
    document.querySelectorAll(".grid").forEach((e) => e.parentNode.removeChild(e));
    let num = -1;
    while (isNaN(num) || num < 1 || num > 100) {
        num = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    };
    makeGrid(num);
};

makeGrid(16);

const button = document.getElementById('btn');

button.onclick = () => reset();
