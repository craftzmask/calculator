let digits = [];   // store entered digits from the numeric buttons
const tokens = []; // store tokens to calculate

const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.result');

const numericKeys = document.querySelectorAll('.numeric');
numericKeys.forEach(numericKey => {
  numericKey.addEventListener('click', e => {
    digits.push(numericKey.dataset.key);
    inputDisplay.textContent = Number(digits.join(''));
  });
});

const operatorKeys = document.querySelectorAll('.operator');
operatorKeys.forEach(operatorKey => {
  operatorKey.addEventListener('click', e => {
    if (tokens.length === 0) {
      tokens.push(Number(digits.join('')));
    }

    if (tokens.length === 2 && digits.length !== 0) {
      const operator = tokens.pop();
      const first = tokens.pop();
      const second = Number(digits.join(''));

      if (operator === '/' && second === 0) {
        resultDisplay.textContent = '';
        inputDisplay.textContent = 'Math Error';
        digits = [];
        return;
      } else {
        tokens.push(operate(first, second, operator));
        inputDisplay.textContent = tokens[0];
      }
    }

    tokens.push(operatorKey.dataset.key);
    digits = [];

    resultDisplay.textContent = `${tokens[0]} ${tokens[1]}`;
  });
});

const clearKey = document.querySelector('.ac');
clearKey.addEventListener('click', e => {
  digits = [];
  inputDisplay.textContent = Number(digits.join(''));
  resultDisplay.textContent = '';
});

const equalKey = document.querySelector('.equal');
equalKey.addEventListener('click', e => {
  if (tokens.length === 2 && digits.length !== 0) {
    const operator = tokens.pop();
    const first = tokens.pop();
    const second = Number(digits.join(''));
    if (operator === '/' && second === 0) {
      resultDisplay.textContent = '';
      inputDisplay.textContent = 'Math Error';
    } else {
      tokens.push(operate(first, second, operator));
      inputDisplay.textContent = tokens[0];
      resultDisplay.textContent = `${first} ${operator} ${second} =`;
    }
    digits = [];
  }
});

const backspaceKey = document.querySelector('.backspace');
backspaceKey.addEventListener('click', e => {
  digits.pop();
  inputDisplay.textContent = Number(digits.join(''));
});

const dotKey = document.querySelector('.dot');
dotKey.addEventListener('click', e => {
  if (!digits.includes('.')) {
    digits.push('.');
    inputDisplay.textContent += '.';
  }
});

function operate(first, second, operator) {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      if (second === 0) return 0;
      return first / second;
  }
}