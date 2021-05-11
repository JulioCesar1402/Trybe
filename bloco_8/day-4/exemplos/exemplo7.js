const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54]

const evenNumbers = numbers.filter(number => number % 2 === 0);
const functionOfsum = ( bag, number) => bag + number;
const sumOfNumbers = evenNumbers.reduce(functionOfsum, 0);

console.log(sumOfNumbers)