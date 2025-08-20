let colors = [];

function setColors() {
    colors = [
        document.getElementById('color_1').value.trim(),
        document.getElementById('color_2').value.trim(),
        document.getElementById('color_3').value.trim(),
        document.getElementById('color_4').value.trim(),
        document.getElementById('color_5').value.trim()
    ].filter(c => c); // remove any empty ones

    // show them back to user
    document.getElementById('userTextOutput').innerText =
        "Your colors: " + colors.join(", ");
}

const container = document.getElementById('container');
const SQUARE = 1260;

// build the hoverboard
for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    if (colors.length === 0) return; // do nothing if no colors chosen yet
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
