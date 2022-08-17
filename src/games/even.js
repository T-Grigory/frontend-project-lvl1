import readlineSync from "readline-sync";

function isEven(number) {
    return number % 2 === 0;
}

export default function evenGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        const question =  Math.floor(Math.random() * 100);
        console.log(`Question: ${question}`);
        const correctAnswer = isEven(question) ? 'yes' : 'no';
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}`);
}