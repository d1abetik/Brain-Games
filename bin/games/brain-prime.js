import randomSize from '../../src/utils.js';
import app from '../../src/index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (number) => {
  const prime = [];

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      prime.push(i);
    }
  }
  return prime.length > 1;
};

const generateQuestionAnswer = () => {
  const numSimple = randomSize(2, 30);
  const quest = `Question: ${numSimple}`;
  const res = isPrime(numSimple) ? 'no' : 'yes';
  return [quest, res];
};

const primeGame = () => {
  app(discription, generateQuestionAnswer());
};

export default primeGame;
