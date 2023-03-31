import app from '../index.js';
import randomSize from '../utils.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const question = randomSize(0, 10);
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

const evenGame = () => app(discription, generateQuestionAnswer);

export default evenGame;
