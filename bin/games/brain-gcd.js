import { coupleNumbers } from '../src/utils.js';

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

const resultGcd = () => {
  let res = '';
  const [gcdNum1, gcdNum2] = coupleNumbers(100);
  console.log(`Question: ${gcdNum1} ${gcdNum2}`);
  res = NOD(gcdNum1, gcdNum2);
  return res;
};

export default resultGcd;
