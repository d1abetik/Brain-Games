import { randomSize } from '../src/utils.js';

const findSimple = (number) => {
  const prime = [];

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      prime.push(i);
    }
  }
  return prime.length > 1 ? 'no' : 'yes';
};

const resultPrime = () => {
  let res = '';
  const numSimple = randomSize(2, 30);
  console.log(`Question: ${numSimple}`);
  res = findSimple(numSimple);
  return res;
};

export default resultPrime;
