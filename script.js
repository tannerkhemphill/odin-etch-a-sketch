const container = document.getElementById('container');

function makeGrid(num) { 
    for (let i = 0; i < num*num; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid');
        container.appendChild(cell);
    };
    container.style.setProperty("grid-template-columns", `repeat(${num}, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${num}, 2fr)`);
};

makeGrid(16);