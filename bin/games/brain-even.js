import app from '../../src/index.js';
import randomSize from '../../src/utils.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAnswer = () => {
  const num = randomSize(0, 10);
  const quest = `Question: ${num}`;
  const res = isEven(num) ? 'yes' : 'no';
  return [quest, res];
};

const evenGame = () => {
  app(discription, generateQuestionAnswer());
};

export default evenGame;
