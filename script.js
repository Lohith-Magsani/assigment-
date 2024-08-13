let number = 0;
const maxNumber = 150;
let history = [];
let redoStack = [];

const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const numberDisplay = document.getElementById('numberDisplay');
const progressBar = document.getElementById('progressBar');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

function updateDisplay() {
    numberDisplay.textContent = number;
    progressBar.style.width = (number / maxNumber) * 100 + '%';
}

function changeNumber(delta) {
    const newNumber = number + delta;
    if (newNumber >= 0 && newNumber <= maxNumber) {
        history.push(number);
        redoStack = [];
        number = newNumber;
        updateDisplay();
    }
}

subtractBtn.addEventListener('click', () => changeNumber(-1));
addBtn.addEventListener('click', () => changeNumber(1));

undoBtn.addEventListener('click', () => {
    if (history.length > 0) {
        redoStack.push(number);
        number = history.pop();
        updateDisplay();
    }
});

redoBtn.addEventListener('click', () => {
    if (redoStack.length > 0) {
        history.push(number);
        number = redoStack.pop();
        updateDisplay();
    }
});

updateDisplay();
