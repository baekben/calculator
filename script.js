const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('.display');
var sndDisplay = document.getElementById('secondary');
var nums = '';
var answer;
var displayError = false;
var decimalOn = '';

buttons.forEach(button => button.addEventListener('click', input));

function input(e) {
  //button function
  const button = e.target;
  const type = button.className;
  var value = button.getAttribute('value');
  console.log(value);
  if (displayError == true) {
    display.textContent = '';
    sndDisplay.textContent = '';
    displayError = false;
  }
  display.textContent = value;
  sndDisplay.textContent += value;
  switch (type) {
    case 'number':
      nums += value;
      break;
    case 'operator':
      nums += value;
      break;
    case 'equal':
      let memory = solving(nums); //calculator memory
      display.textContent = memory;
      nums = memory;
      sndDisplay.innerHTML = memory;
      break;
    case 'clear':
      nums = '';
      display.textContent = '';
      sndDisplay.textContent = '';
      break;
    case 'decimal':
      nums += decimal(value);
      decimalOn = '';
      break;
  }
}

function decimal(value) {
  if (value == '.' && decimalOn == 'yes') {
    alert('ERROR\nDecimal already in place for this number.');
    return;
  } else {
    decimalOn = 'yes';
    return '.';
  }
}

function solving(problem) {
  console.log('problem: ' + problem);
  if (problem.includes('/0')) {
    alert("ERROR\nCan't Divide by 0");
    displayError = true;
    return;
  }

  let mathProblem = verifyExpression(problem);

  for (let i = 0; i < mathProblem.length; i++) {
    if (mathProblem[i] == '*' || mathProblem[i] == '/') {
      let part = operate(
        mathProblem[i],
        mathProblem[i - 1],
        mathProblem[i + 1]
      );
      mathProblem.splice(i - 1, 3, part);
      i--;
    } else if (mathProblem[i] == '+' || mathProblem[i] == '-') {
      let part = operate(
        mathProblem[i],
        mathProblem[i - 1],
        mathProblem[i + 1]
      );
      mathProblem.splice(i - 1, 3, part);
      i--;
    }
  }

  console.log(Number(mathProblem));
  answer = Number(mathProblem);
  return answer.toString();
}

function verifyExpression(expression) {
  var mathExpression = expression;
  expression = expression.replace(/[0-9]+/g, '#').replace(/[\(|\|\.)]/g, '');
  var numbers = mathExpression.split(/[^0-9\.]+/);
  var operators = expression.split('#').filter(function(i) {
    return i;
  });
  var verified = [];
  for (let i = 0; i < numbers.length; i++) {
    verified.push(numbers[i]);
    if (i < operators.length) {
      verified.push(operators[i]);
    }
  }
  return verified;
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
  num1 = Number(num1);
  num2 = Number(num2);
  var total;
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
  return total;
  // display.textContent = total.toString();
  // console.log(total);
}
