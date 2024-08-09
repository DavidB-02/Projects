// index.js

// Get the display element
const display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    switch (value) {
        case 'C':
            clearDisplay();
            break;
        case 'B':
            backspace();
            break;
        case '=':
            calculateResult();
            break;
        default:
            display.value += value === 'x' ? '*' : value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to remove the last character from the display
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
