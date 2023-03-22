import readlineSync from 'readline-sync';

// random Operator
const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

// Meet question
const meetQuest = (name) => console.log(`Hello, ${name}!`);

// Random Number
const randomNum = (multi) => {
  const result = Math.floor(Math.random() * multi);
  return result;
};

const numberForQuest = (multi) => {
  const numForRun = randomNum(multi);
  return numForRun;
};

const randomForCalc = () => {
  const firstNum = randomNum(10);
  const secondNum = randomNum(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
};

const correctCalc = (num, operator, num2) => {
  const res = eval(num + operator + num2);
  return res;
};

const NOD = (num1, num2) => {
  let a = num1;
  let b = num2;
  let res = 0;
  while (a % b !== 0 && b % a !== 0) {
    if (a > b) {
      a %= b;
      res = a;
    } else {
      b %= a;
      res = b;
    }
  }
  return res;
};

const whichResult = (nameGame) => {
  switch (nameGame) {
    case 'brain-even': {
      const num = numberForQuest(10);
      console.log(`Question: ${num}`);
      const res = num % 2 === 0 ? 'yes' : 'no';
      return res;
    }
    case 'brain-calc': {
      const [num1, num2, operator] = randomForCalc(10);
      console.log(`Question: ${num1} ${operator} ${num2}`);
      const result = correctCalc(num1, operator, num2).toString();
      return result;
    }
    case 'brain-gcd': {
      const num1 = numberForQuest(100);
      const num2 = numberForQuest(100);
      console.log(`Question: ${num1}, ${num2}`);
      const resu = NOD(num1, num2);
      return resu.toString();
    }
    default: {
      return 'sorry!';
    }
  }
};

const whichQuestion = (nameGame) => {
  switch (nameGame) {
    case 'brain-even': {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    }
    case 'brain-calc': {
      console.log('What is the result of the expression?');
      break;
    }
    case 'brain-gcd': {
      console.log('Find the greatest common divisor of given numbers.');
      break;
    }
    default: {
      return 'sorry!';
    }
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
  meetQuest, randomNum, ranOperator, app, whichResult,
};
