import readlineSync from 'readline-sync';

const name = () => {
  const user = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${user}!`);
};
export default name;
