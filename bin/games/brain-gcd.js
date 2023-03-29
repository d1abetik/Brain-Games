import app from '../../src/index.js';

const discription = 'Find the greatest common divisor of given numbers.';

const numberForQuest = (multi) => randomNum(multi);

const coupleNumbers = (multi) => {
  const num1 = numberForQuest(multi);
  const num2 = numberForQuest(multi);
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
  const quest = `Question: ${gcdNum1} ${gcdNum2}`;
  res = NOD(gcdNum1, gcdNum2);
  return [quest, res];
};

const gcdGame = () => {
  app(discription, generateQuestionAnswer());
};

export default gcdGame;
