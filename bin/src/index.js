import readlineSync from 'readline-sync';
import resultCalc from '../games/brain-calc.js';
import resultProgression from '../games/brain-progression.js';
import resultGcd from '../games/brain-gcd.js';
import resultPrime from '../games/brain-prime.js';
import resultEven from '../games/brain-even.js';

// Meet question
const meetQuest = (name) => console.log(`Hello, ${name}!`);

// Programm for app to chose result for games

const whichResult = (nameGame) => {
  let res = '';

  if (nameGame === 'brain-even') {
    res = resultEven();
  } else if (nameGame === 'brain-calc') {
    res = resultCalc();
  } else if (nameGame === 'brain-gcd') {
    res = resultGcd();
  } else if (nameGame === 'brain-progression') {
    res = resultProgression();
  } else if (nameGame === 'brain-prime') {
    res = resultPrime();
  }
  return res;
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
