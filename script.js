const container = document.createElement('div');
container.setAttribute('id', 'container');
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.toggle('grid');
    container.appendChild(div);
}