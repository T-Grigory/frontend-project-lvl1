import { getRandomInt, getRandomOperator } from "../random.js";
import { NUMBER_OF_ROUNDS, engine } from "../index.js";

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('Нет такого оператора!!!');
    }
}


export default function calcGameStart() {
    const data = [];

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        const currentData = [];

        const num1 = getRandomInt();
        const num2 = getRandomInt();
        const operator = getRandomOperator();

        const result = String(calculate(num1, num2, operator));

        currentData.push(`${num1} ${operator} ${num2}`);
        currentData.push(result);
        data.push(currentData);
    }

    engine(data);
}