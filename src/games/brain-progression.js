import randomSize from '../utils.js';
import app from '../index.js';

const discription = 'What number is missing in the progression?';

const getProgression = () => {
  let first = randomSize(0, 100);
  const randomSizeOf = randomSize(7, 13);
  const randomRange = randomSize(2, 5);
  const result = [];

  for (let i = 1; i <= randomSizeOf; i += 1) {
    first += randomRange;
    result.push(first);
  }
  return result;
};

const generateQuestionAnswer = () => {
  const progression = getProgression();
  const randomEmpty = randomSize(0, progression.length);
  const emptyRes = progression[randomEmpty];
  progression[randomEmpty] = '..';

  let result = '';
  const question = `${progression.join(' ')}`;
  result = emptyRes;
  return [question, result];
};

const gameProgression = () => app(discription, generateQuestionAnswer);

export default gameProgression;
