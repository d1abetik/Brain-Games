#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { meetQuest, correctNot } from '/home/cloudy/hexlet-js/frontend-project-44/bin/src/index.js';

const calc = () => {
  const char = readlineSync.question('May I have your name?: ');
  meetQuest('What is the result of the expression?', char);

  correctNot(char);
};

calc();
