const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.buttons');
var display = document.querySelector('.display');
var nums = new Array();
var answer;
var displayError = false;
buttons.forEach(button => button.addEventListener('click', input));
function input(e) {
  const button = e.target;
  const type = button.className;
  const value = button.getAttribute('value');
  console.log(value);
  // if ((displayError = true)) {
  //   display.textContent = '';
  //   displayError = false;
  // }
  display.textContent = value;
  switch (type) {
    case 'number':
      nums.push(Number(value));

      console.log(nums);
      break;
    case 'operator':
      nums.push(value);
      break;
    case 'equal':
      console.log(nums[0]);
      console.log(nums[1]);
      operate(nums[1], nums[0], nums[2]);
      nums = [];
      break;
    case 'clear':
      display.textContent = '';
      break;
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
  display.textContent = total.toString();
  console.log(total);
}
