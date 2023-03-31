import app from '../index.js';
import randomSize from '../utils.js';

const discription = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const getRandomOperationSymbol = (symbolMassive) => {
  const randomIndex = randomSize(0, symbolMassive.length);
  const randomSymbol = symbolMassive[randomIndex];
  return randomSymbol;
};

const calculate = (number, operator, number2) => {
  let result = 0;
  if (operator === '*') {
    result = number * number2;
  } else if (operator === '+') {
    result = number + number2;
  } else if (operator === '-') {
    result = number - number2;
  }
  return result;
};

const generateQuestionAnswer = () => {
  const number1 = randomSize(0, 20);
  const number2 = randomSize(0, 20);
  const oper = getRandomOperationSymbol(symbols);
  const question = `${number1} ${oper} ${number2}`;
  const result = calculate(number1, oper, number2);
  return [question, result];
};

const calcGame = () => app(discription, generateQuestionAnswer);

export default calcGame;
