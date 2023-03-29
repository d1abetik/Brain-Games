import randomSize from '../../src/utils.js';
import app from '../../src/index.js';

const discription = 'What number is missing in the progression?';

const generateLine = () => {
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

const generateEmpty = (massive) => {
  const randomEmpty = randomSize(0, massive.length);
  const result = massive[randomEmpty];

  const hiddenMassive = [];

  for (let x = 0; x < massive.length; x += 1) {
    if (massive[x] === result) {
      hiddenMassive.push('..');
    } else {
      hiddenMassive.push(massive[x]);
    }
  }
  return [hiddenMassive, result];
};

const generateQuestionAnswer = () => {
  const [massive, result] = generateEmpty(generateLine());
  let res = '';
  let stroke = '';
  for (let i = 0; i < massive.length; i += 1) {
    if (i === massive.length - 1) {
      stroke += `${massive[i]}`;
    } else {
      stroke += `${massive[i]} `;
    }
  }
  const quest = `${stroke}`;
  res = result;
  return [quest, res];
};

const gameProgression = () => app(discription, generateQuestionAnswer);

export default gameProgression;
