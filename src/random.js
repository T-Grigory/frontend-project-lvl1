function getRandomInt(max = 100) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(operators.length)];
}

export { getRandomOperator, getRandomInt };
