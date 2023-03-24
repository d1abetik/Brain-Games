import { randomNum } from '../src/utils.js';

const numberForQuest = (multi) => randomNum(multi);

const resultEven = () => {
  let res = '';
  const num = numberForQuest(10);
  console.log(`Question: ${num}`);
  res = num % 2 === 0 ? 'yes' : 'no';
  return res;
};

export default resultEven;
