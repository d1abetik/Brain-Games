import randomSize from '../utils.js';
import app from '../index.js';

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
  const question = randomSize(2, 30);
  const result = isPrime(question) ? 'no' : 'yes';
  return [question, result];
};

const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => app(discription, generateQuestionAnswer);

export default primeGame;
