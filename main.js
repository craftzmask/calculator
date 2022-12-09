const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.result');

let digits = [];   // store entered digits from the numeric buttons
const tokens = []; // store tokens to calculate

keys.forEach(key => {
  // Update the input display
  const keyValue = key.dataset.key;

  if (keyValue >= '0' && keyValue <= '9') {
    key.addEventListener('click', e => {
      digits.push(keyValue);
      inputDisplay.textContent = Number(digits.join(''));
    });
  }

  // Clear input
  if (keyValue === 'ac') {
    key.addEventListener('click', e => {
      digits = [];
      inputDisplay.textContent = Number(digits.join(''));
    })
  }

  // Equal logic
  if (keyValue === '=') {
    key.addEventListener('click', e => {
      if (tokens.length === 2 && digits.length !== 0) {
        const operator = tokens.pop();
        const first = tokens.pop();
        const second = Number(digits.join(''));
        tokens.push(operate(first, second, operator));
        digits = [];

        inputDisplay.textContent = tokens[0];
        resultDisplay.textContent = `${first} ${operator} ${second} =`;
      }
    });
  }

  // Handle logic when a operator button clicked
  if (['+', '-', '*', '/'].includes(keyValue)) {
    key.addEventListener('click', e => {

      if (tokens.length === 0) {
        tokens.push(Number(digits.join('')));
      }

      if (tokens.length === 2 && digits.length !== 0) {
        const operator = tokens.pop();
        const first = tokens.pop();
        const second = Number(digits.join(''));
        tokens.push(operate(first, second, operator));

        inputDisplay.textContent = tokens[0];
      }

      tokens.push(keyValue);
      digits = [];

      resultDisplay.textContent = `${tokens[0]} ${tokens[1]}`;
    });
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
      return first / second;
  }
}