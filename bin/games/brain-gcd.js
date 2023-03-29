import app from '../../src/index.js';
import randomSize from '../../src/utils.js';

const discription = 'Find the greatest common divisor of given numbers.';

const coupleNumbers = (multi) => {
  const num1 = randomSize(0, multi);
  const num2 = randomSize(0, multi);
  return [num1, num2];
};

// Mechanics for NOD game
const NOD = (num1, num2) => {
  let a = num1;
  let b = num2;
  let res = 0;
  while (a !== b) {
    if (a > b) {
      a -= b;
      res = a;
    } else {
      b -= a;
      res = b;
    }
  }
  if (num1 === num2) {
    res = num1;
  }
  return res;
};

const generateQuestionAnswer = () => {
  let res = '';
  const [gcdNum1, gcdNum2] = coupleNumbers(100);
  const quest = ` ${gcdNum1} ${gcdNum2}`;
  res = NOD(gcdNum1, gcdNum2);
  return [quest, res];
};

const gcdGame = () => app(discription, generateQuestionAnswer());

export default gcdGame;
