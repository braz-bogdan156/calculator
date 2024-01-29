
import { calculateResult, resetCalculator, appendToDisplay, resultDisplay } from './calculator';

describe('Calculator Functions', () => {
  let resultDisplay: HTMLDivElement;

  beforeEach(() => {
    document.body.innerHTML = '<output id="result"></output>';
    resultDisplay = document.getElementById('result') as HTMLDivElement;
  });

  // Тести для функції додавання значення до виведення результату
  describe('appendToDisplay', () => {
    it('додає значення до виведення', () => {
      appendToDisplay('5');
      expect(resultDisplay.innerText).toBe('5');
    });

    it('додає значення до порожнього виведення', () => {
      appendToDisplay('3');
      expect(resultDisplay.innerText).toBe('3');
    });
  });

  // Тести для функції обчислення результату
  describe('calculateResult', () => {
    it('правильно обчислює суму', () => {
      resultDisplay.innerText = '5+3';
      calculateResult();
      expect(resultDisplay.innerText).toBe('8');
    });

    it('правильно обчислює різницю', () => {
      resultDisplay.innerText = '9-4';
      calculateResult();
      expect(resultDisplay.innerText).toBe('5');
    });

    it('правильно обчислює добуток', () => {
      resultDisplay.innerText = '6*2';
      calculateResult();
      expect(resultDisplay.innerText).toBe('12');
    });

    it('правильно обчислює частку', () => {
      resultDisplay.innerText = '8/2';
      calculateResult();
      expect(resultDisplay.innerText).toBe('4');
    });

    it('правильно обчислює вираз з десятковою комою', () => {
      resultDisplay.innerText = '0.1+0.2';
      calculateResult();
      expect(resultDisplay.innerText).toBe('0.3');
    });

    it('забезпечує обробку помилок', () => {
      resultDisplay.innerText = '10/0';
      calculateResult();
      expect(resultDisplay.innerText).toBe('Infinity');
    });
  });

  // Тести для функції скидання калькулятора
  describe('resetCalculator', () => {
    it('скидає виведення результату', () => {
      resultDisplay.innerText = '123';
      resetCalculator();
      expect(resultDisplay.innerText).toBe('');
    });
  });
});