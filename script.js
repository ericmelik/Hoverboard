const conainer = document.getElementById('container');
const colors = ['#FF204E', '#A0153E', '#5D0E41', '#00224D', '#FFCC00', '#FF6F00', '#FF3D00', '#D500F9', '#6200EA', '#03A9F4', '#00BFA5', '#1B5E20', '#33691E', '#827717', '#F57F17', '#FF6D00', '#DD2C00'];
const SQUARE = 1260;

for(let i = 0; i < SQUARE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

     container.appendChild(square);
}

function setColor(element) {
     const color = getRandomColor();
     element.style.backgroundColor = color;
     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
     
}

function removeColor(element) {
     element.style.backgroundColor = '#1d1d1d';
     element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
