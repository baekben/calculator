const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('.display');
var sndDisplay = document.getElementById('secondary');
var nums = '';
var answer;
var displayError = false;

buttons.forEach(button => button.addEventListener('click', input));

function input(e) {
  const button = e.target;
  const type = button.className;
  const value = button.getAttribute('value');
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
      console.log(nums);
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
      value = value + '.' + 0;
      break;
  }
}

function clearAll() {}

function solving(problem) {
  if (problem.includes('/0')) {
    alert("ERROR\nCan't Divide by 0");
    displayError = true;
    return;
  }
  let mathProblem = problem.split('');
  console.log(mathProblem);

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
