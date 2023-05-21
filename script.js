const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      clear();
    } else if (button.id === 'equals') {
      calculate();
    } else if (button.classList.contains('operator')) {
      handleOperator(button.id);
    } else {
      handleNumber(button.innerText);
    }
  });
});

function handleNumber(number) {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  display.innerText = currentNumber;
}

function handleOperator(op) {
  if (operator !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '0';
}

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result = 0;
  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }
  currentNumber = result.toString();
  display.innerText = currentNumber;
  operator = '';
}

function clear() {
  currentNumber = '0';
  previousNumber = '';
  operator = '';
  display.innerText = currentNumber;
}