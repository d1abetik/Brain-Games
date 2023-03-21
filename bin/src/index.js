import readlineSync from 'readline-sync';

// random Operator
const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

// Meet question
const meetQuest = (name) => {
  console.log(`Hello, ${name}!`);
  return;
};


// Random Number
const randomNum = (multi) => {
  const result = Math.floor(Math.random() * multi);
  return result;
};

const numberForQuest = () => {
  const numForRun = randomNum(10);
  return numForRun;
}

const randomForCalc = () => {
  const firstNum = randomNum(10);
  const secondNum = randomNum(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
}

const correctCalc = (num, operator, num2) => {
  const res = eval(num + operator + num2);
  return res;
};

const whichResult = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log(`Question: ${numberForQuest()}`);
      const res = numberForQuest() % 2 === 0 ? 'yes' : 'no';
      return res;
    case 'brain-calc':
      const [num1, num2, operator] = randomForCalc();
      console.log(`Question: ${num1} ${operator} ${num2}`);
      const result = correctCalc(num1, operator, num2).toString();
      return result;
  }
};

const whichQuestion = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
  }
};

// Приложение
const app = (game) => {
  const char = readlineSync.question('May I have your name?: ');
  meetQuest(char);
  whichQuestion(game);
  for (let i = 0; i < 3; i += 1) {
    const res = whichResult(game);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === res) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${res}.`);
      return console.log(`Let's try again, ${char}!`);
    }
  }
  return console.log(`Congratulations, ${char}`);
};

export {
  meetQuest, randomNum, ranOperator, app, whichResult
};
