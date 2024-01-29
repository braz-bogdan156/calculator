"use strict";
// Отримайте посилання на важливі елементи DOM
const resultDisplay = document.getElementById('result');
const buttons = Array.from(document.querySelectorAll('.calc_btn'));
// Додайте обробники подій до кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});
// Функція для обробки кліку по кнопці
function handleButtonClick(value) {
    if (value !== null) {
        switch (value) {
            case '=':
                calculateResult();
                break;
            case 'C':
                resetCalculator();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    }
}
// Функція для додавання значення до виведення результату
function appendToDisplay(value) {
    if (resultDisplay !== null) {
        resultDisplay.innerText += value;
    }
}
// Функція для обчислення результату
function calculateResult() {
    try {
        const expression = resultDisplay !== null ? resultDisplay.innerText : '';
        const result = new Function('"use strict";return (' + expression + ')')();
        if (resultDisplay !== null) {
            resultDisplay.innerText = result.toString();
        }
    }
    catch (error) {
        if (resultDisplay !== null) {
            resultDisplay.innerText = 'Error';
        }
    }
}
// Функція для скидання калькулятора
function resetCalculator() {
    if (resultDisplay !== null) {
        resultDisplay.innerText = '';
    }
}
