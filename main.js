const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input');
const operators = ['+', '-', '*', '/'];

keys.forEach(key => {
  // Write the number clicked on the input display
  if (key.dataset.key >= '0' && key.dataset.key <= '9') {
    key.addEventListener('click', e => {
      inputDisplay.textContent += key.dataset.key
      if (inputDisplay.textContent[0] === '0') {
        inputDisplay.textContent = inputDisplay.textContent.slice(1);
      }
    });
  }

  if (key.dataset.key === 'ac') {
    key.addEventListener('click', e => {
      inputDisplay.textContent = '0';
    })
  }

  if (operators.includes(key.dataset.key)) {
    console.log(key.dataset.key)
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