import { NUMBER_OF_ROUNDS, engine } from '../index.js';
import { getRandomInt } from '../random.js';
const PROGRESSION_LENGTH = 10;

function getProgression(start, step) {

    const progression = [];
    let number = start;
    for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
        number += step;
        progression.push(number);
    }

    return progression;
}

export default function progressionGameStart() {
    const data = [];

    for (let i = 0; i < NUMBER_OF_ROUNDS; i+=1) {
        const currentData = [];
        const startProgression = getRandomInt();
        const stepProgression = getRandomInt(10);
        const missingNumberIndex = getRandomInt(10);

        const progression = getProgression(startProgression, stepProgression);
        const result = String(progression[missingNumberIndex]);
        progression[missingNumberIndex] = '..';

        currentData.push(progression.join(' '));
        currentData.push(result);

        data.push(currentData);

    }
    const rule = 'What number is missing in the progression?';
    engine(data, rule);
}