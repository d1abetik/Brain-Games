import readlineSync from 'readline-sync';
export const name = () => {
  const user = readlineSync.question('May I have your name?: ');
  console.log("Hello, " + user + '!');
}
