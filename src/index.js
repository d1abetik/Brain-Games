import readlineSync from 'readline-sync';

const app = (dis, generateQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const char = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${char}!`);
  console.log(dis);
  for (let i = 0; i < 3; i += 1) {
    const [quest, answer] = generateQuestionAnswer();
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer !== answer.toString()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      return console.log(`Let's try again, ${char}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${char}!`);
};

export default app;
