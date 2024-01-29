
// Отримайте посилання на важливі елементи DOM
export const resultDisplay = document.getElementById('result') as HTMLOutputElement;
const buttons = Array.from(document.querySelectorAll('.calc_btn')) as HTMLButtonElement[];

// Додайте обробники подій до кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

// Функція для обробки кліку по кнопці
function handleButtonClick(value: string | null): void {
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
export function appendToDisplay(value: string): void {
    if (resultDisplay !== null) {
        resultDisplay.innerText += value;
    }
}

// Функція для обчислення результату
export function calculateResult(): void {
    try {
        const expression = resultDisplay !== null ? resultDisplay.innerText : '';
        const result = new Function('"use strict";return (' + expression + ')')();
        if (resultDisplay !== null) {
            resultDisplay.innerText = result.toString();
        }
    } catch (error) {
        if (resultDisplay !== null) {
            resultDisplay.innerText = 'Error';
        }
    }
}

// Функція для скидання калькулятора
export function resetCalculator(): void {
    if (resultDisplay !== null) {
        resultDisplay.innerText = '';
    }
}
export {};