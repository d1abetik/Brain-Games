// Random Number
const randomNum = (multi) => Math.floor(Math.random() * multi);

// Random Number for questions
const numberForQuest = (multi) => randomNum(multi);

// Double numbers
const coupleNumbers = (multi) => {
  const num1 = numberForQuest(multi);
  const num2 = numberForQuest(multi);
  return [num1, num2];
};

// Random size of line
const randomSize = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

export {
  numberForQuest, coupleNumbers, randomSize, randomNum,
};
