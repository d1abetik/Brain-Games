import readlineSync from 'readline-sync';

// random Operator
const ranOperator = (massive) => {
  const ranOper = Math.floor(Math.random() * massive.length);
  return massive[ranOper];
};

// Meet question
const meetQuest = (name) => console.log(`Hello, ${name}!`);

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

// Random for calc game
const randomForCalc = () => {
  const [firstNum, secondNum] = coupleNumbers(10);
  const operator = ranOperator(['+', '-', '*']);
  return [firstNum, secondNum, operator];
};

// Good in calc game
const correctCalc = (num, operator, num2) => eval(num + operator + num2);

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
  while (a !== b) {
    if (a > b) {
      a -= b;
      res = a;
    } else {
      b -= a;
      res = b;
    }
  }
  return res;
};

const findSimple = (number) => {
  const prime = [];

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      prime.push(i);
    }
  }
  return prime.length > 1 ? 'no' : 'yes';
};

// Programm for app to chose result for games
const whichResult = (nameGame) => {
  let correctAnswer = 0;

  if (nameGame === 'brain-even') {
    const num = numberForQuest(10);
    console.log(`Question: ${num}`);
    correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  } else if (nameGame === 'brain-calc') {
    const [num1, num2, operator] = randomForCalc(10);
    console.log(`Question: ${num1} ${operator} ${num2}`);
    correctAnswer = correctCalc(num1, operator, num2).toString();
  } else if (nameGame === 'brain-gcd') {
    const [gcdNum1, gcdNum2] = coupleNumbers(100);
    console.log(`Question: ${gcdNum1}, ${gcdNum2}`);
    correctAnswer = NOD(gcdNum1, gcdNum2).toString();
  } else if (nameGame === 'brain-progression') {
    const [massive, result] = generateEmpty(generateLine());
    console.log(`Question: ${massive}`);
    correctAnswer = result.toString();
  } else if (nameGame === 'brain-prime') {
    const numSimple = randomSize(2, 30);
    console.log(`Question: ${numSimple}`);
    correctAnswer = findSimple(numSimple);
  }
  return correctAnswer;
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
    case 'brain-prime': {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    }
    default: {
      console.log('aboba');
      break;
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

export default app;
