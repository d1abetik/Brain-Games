import { coupleNumbers } from '../src/utils.js';

// random Operator
const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

// Random for calc game
const randomForCalc = () => {
  const [firstNum, secondNum] = coupleNumbers(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
};

// Good in calc game
const correctCalc = (num, operator, num2) => {
  let res = 0;
  if (operator === '*') {
    res = num * num2;
  } else if (operator === '+') {
    res = num + num2;
  } else if (operator === '-') {
    res = num - num2;
  }
  return res;
};

const resultCalc = () => {
  let res = '';
  const [num1, num2, operator] = randomForCalc(10);
  console.log(`Question: ${num1} ${operator} ${num2}`);
  res = correctCalc(num1, operator, num2).toString();
  return res;
};

export default resultCalc;
