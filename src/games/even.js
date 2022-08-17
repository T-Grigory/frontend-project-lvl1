import { getRandomInt } from '../random.js';
import { NUMBER_OF_ROUNDS, engine } from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

export default function evenGameStart() {
  const data = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const currentData = [];
    const question = getRandomInt();
    currentData.push(question);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    currentData.push(correctAnswer);
    data.push(currentData);
  }
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(data, rule);
}
