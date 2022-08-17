import getRandomInt from "../random.js";
import {NUMBER_OF_ROUNDS, engine} from "../index.js";

function isEven(number) {
    return number % 2 === 0;
}

export default function evenGameStart() {
    const data = [];
    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        const currentData = [];
        const question = getRandomInt();
        currentData.push(question);
        const correctAnswer = isEven(question) ? 'yes' : 'no';
        currentData.push(correctAnswer);
        data.push(currentData);
    }

    engine(data);
}