// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, operation) {
  let result;
  switch (operation) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide': 
      result = x / y;
      break;
  }
  alert(result);
};

let x;
let y;
let operation;

do{
  // COLLECT FIRST NUMBER FROM USER
  x = Number(prompt('Enter a first number.'));

  // COLLECT SECOND NUMBER FROM USER
  y = Number(prompt('Enter a second number.'));

  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  operation = prompt('Would you like to add, subtract, multiply, or divide?');
  if (operation !== 'add' && operation !== 'subtract' && operation !== 'multiply' && operation !== 'divide') {
    operation = 'invalid';
    alert('Operation entered is invalid. Please enter values again.');
  }
} while (operation === 'invalid');

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(x, y, operation);

