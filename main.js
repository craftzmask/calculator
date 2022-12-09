const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.result');

let digits = [0];   // store entered digits from the numeric buttons
const tokens = []; // store tokens to calculate

keys.forEach(key => {
  // Update the input display
  if (key.dataset.key >= '0' && key.dataset.key <= '9') {
    key.addEventListener('click', e => {
      digits.push(key.dataset.key);
      inputDisplay.textContent = Number(digits.join(''));
    });
  }

  // Clear input
  if (key.dataset.key === 'ac') {
    key.addEventListener('click', e => {
      digits = [];
      inputDisplay.textContent = '0';
    })
  }

  // Handle logic when a operator button clicked
  if (['+', '-', '*', '/'].includes(key.dataset.key)) {
    key.addEventListener('click', e => {
      if (tokens.length === 0) {
        tokens.push(Number(digits.join('')));
      } else {
        const operator = tokens.pop();
        const first = tokens.pop();
        const second = Number(digits.join(''));
        tokens.push(operate(first, second, operator));
        inputDisplay.textContent = tokens[0];
      }

      tokens.push(key.dataset.key);
      resultDisplay.textContent = `Ans = ${tokens[0]} ${tokens[1]}`;
      
      // clear all digits every time operator button clicked
      digits = [];
    });
  }
});

function eval() {

}

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