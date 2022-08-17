import { NUMBER_OF_ROUNDS, engine } from '../index.js';
import { getRandomInt } from '../random.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeGameStart() {
  const data = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const currentData = [];

    const number = getRandomInt();

    const result = isPrime(number) ? 'yes' : 'no';

    currentData.push(number);
    currentData.push(result);

    data.push(currentData);
  }

  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  engine(data, rule);
}
