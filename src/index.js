import readlineSync from "readline-sync";

export const NUMBER_OF_ROUNDS = 3;

export function engine(data) {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        const question = data[i][0];
        const correctAnswer = data[i][1];

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}`);
}