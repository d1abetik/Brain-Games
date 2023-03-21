import readlineSync from 'readline-sync';

// random Operator
const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

// Meet question
const meetQuest = (message, name) => {
  console.log(`Hello, ${name}!`);
  return message;
};

// Random Number
const randomNum = (multi) => {
  let result = 0;
  result = Math.floor(Math.random() * multi);
  return result;
};

// brain-calc
const correctNot = (name) => {
  const oper = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const randomOp = ranOperator(oper);
    const first = randomNum(10);
    const second = randomNum(10);
    const result = eval(first + randomOp + second);
    console.log(`Question: ${first} ${randomOp} ${second}`);
    const userAns = readlineSync.question('Answer: ');
    if (Number(userAns) === result) {
      console.log('Correct!');
    } else {
      console.log(`${userAns} is wrong answer ;(. Correct answer was ${result}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export {
  correctNot, meetQuest, randomNum, ranOperator
};
