import { NUMBER_OF_ROUNDS, engine } from '../index.js';
import { getRandomInt } from '../random.js';

function getGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }

  return getGCD(num2, num1 % num2);
}
export default function gcdGameStart() {
  const data = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const currentData = [];

    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const gcd = String(getGCD(num1, num2));

    currentData.push(`${num1} ${num2}`);
    currentData.push(gcd);

    data.push(currentData);
  }
  const rule = 'Find the greatest common divisor of given numbers.';
  engine(data, rule);
}
