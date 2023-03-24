import { numberForQuest, randomSize } from '../src/utils.js';

// Generate Line for progression game
const generateLine = () => {
  let first = numberForQuest(100);
  const randomSizeOf = randomSize(7, 13);
  const randomRange = randomSize(2, 5);
  const result = [];

  for (let i = 1; i <= randomSizeOf; i += 1) {
    first += randomRange;
    result.push(first);
  }
  return result;
};

// Generate Empty slot in progression game
const generateEmpty = (massive) => {
  const randomEmpty = numberForQuest(massive.length) - 1;
  const result = massive[randomEmpty];

  const hiddenMassive = [];

  for (let i = 0; i < massive.length; i += 1) {
    if (massive[i] === result) {
      hiddenMassive.push('..');
    } else {
      hiddenMassive.push(massive[i]);
    }
  }
  return [hiddenMassive, result];
};

const resultProgression = () => {
  let res = '';
  const [massive, result] = generateEmpty(generateLine());
  console.log(`Question: ${massive}`);
  res = result.toString();
  return res;
}

export default resultProgression;