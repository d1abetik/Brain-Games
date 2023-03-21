#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  let semiRes = '';
  const char = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${char}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const genNum = Math.floor(Math.random() * 100);
    semiRes = genNum % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${genNum}`);
    const userAns = readlineSync.question('Answer: ');
    if (userAns === semiRes) {
      console.log('Correct!');
    } else {
      console.log(`${userAns} is wrong answer ;(. Correct answer was ${semiRes}.`);
      return console.log(`Let's try again, ${char}!`);
    }
  }
  return console.log(`Congratulations, ${char}`);
};

brainEven();
