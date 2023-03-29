import app from '../../src/index.js';
import randomSize from '../../src/utils.js';

const discription = 'What is the result of the expression?';

const coupleNumbers = () => {
  const num1 = randomSize(0, 20);
  const num2 = randomSize(0, 20);
  return [num1, num2];
};

const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

const randomForCalc = () => {
  const [firstNum, secondNum] = coupleNumbers(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
};

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

const generateQuestionAnswer = () => {
  const [num1, num2, operator] = randomForCalc(10);
  const quest = `${num1} ${operator} ${num2}`;
  const res = correctCalc(num1, operator, num2);
  return [quest, res];
};

const calcGame = () => app(discription, generateQuestionAnswer());

export default calcGame;
