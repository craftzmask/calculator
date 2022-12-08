const keys = document.querySelectorAll('.key');
const inputDisplay = document.querySelector('.input');

keys.forEach(key => {
  // Write the number clicked on the input display
  if (key.dataset.key >= '0' && key.dataset.key <= '9') {
    key.addEventListener('click', e => {
      inputDisplay.textContent += key.dataset.key
    });
  }

  if (key.dataset.key === 'ac') {
    key.addEventListener('click', e => {
      inputDisplay.textContent = '';
    })
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