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

// Random Number for questions
const numberForQuest = (multi) => {
  const numForRun = randomNum(multi);
  return numForRun;
};

// Random for calc game
const randomForCalc = () => {
  const firstNum = randomNum(10);
  const secondNum = randomNum(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
};

// Good in calc game
const correctCalc = (num, operator, num2) => {
  const res = eval(num + operator + num2);
  return res;
};

// Random size of line
const randomSize = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

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

// Mechanics for NOD game
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

// Prograam for app to chose result for games
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
    case 'brain-progression': {
      const [massive, result] = generateEmpty(generateLine());
      console.log(`Question: ${massive}`);
      return result.toString();
    }
    default: {
      return 'sorry!';
    }
  }
};

// Programm for app to chose question for game
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
    case 'brain-progression': {
      console.log('What number is missing in the progression?');
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
