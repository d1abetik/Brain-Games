import app from '../index.js';
import randomSize from '../utils.js';

const discription = 'Find the greatest common divisor of given numbers.';

const NOD = (number1, number2) => {
  let a = number1;
  let b = number2;
  let result = 0;
  while (a !== b) {
    if (a > b) {
      a -= b;
      result = a;
    } else {
      b -= a;
      result = b;
    }
  }
  if (number1 === number2) {
    result = number1;
  }
  return result;
};

const generateQuestionAnswer = () => {
  let result = '';
  const gcdNumber1 = randomSize(0, 100);
  const gcdNumber2 = randomSize(0, 100);
  const question = `${gcdNumber1} ${gcdNumber2}`;
  result = NOD(gcdNumber1, gcdNumber2);
  return [question, result];
};

const gcdGame = () => app(discription, generateQuestionAnswer);

export default gcdGame;
