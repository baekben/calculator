const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => button.addEventListener('click', input));

function input(e) {
  const button = e.target;
  const type = button.className;
  if (type == 'number') {
    console.log(button.getAttribute('value'));
  } else if (type == 'operator') {
    console.log(button.getAttribute('value'));
  } else {
    console.log(button.getAttribute('value'));
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  //solves the problem
  var total;
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case '+':
      total = add(num1, num2);
      break;
    case '-':
      total = subtract(num1, num2);
      break;
    case '*':
      total = multiply(num1, num2);
      break;
    case '/':
      total = divide(num1, num2);
      break;
  }
  console.log(total);
}
