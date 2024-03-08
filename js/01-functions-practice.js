//STEP 1
function halfNumber (num) {
  let result;
  result = num / 2;
  return `Half of ${num} is ${result}.`;
};
console.log(halfNumber(5));

//STEP 2
function squareNumber(num) {
  let result;
  result = num ** 2;
  return `The result of squaring the number ${num} is ${result}.`
};
console.log(squareNumber(3));

//STEP 3
function percentOf(num1, num2) {
  let result;
  result = (num1 / num2) * 100;
  return `${num1} is ${result}% of ${num2}.`;
};
console.log(percentOf(2, 4));

//STEP 4
function findModulus(num1, num2) {
  let result;
  result = num2 % num1;
  return `${result} is the modulus of ${num1} and ${num2}.`
}
console.log(findModulus(4, 10));

//STEP 5