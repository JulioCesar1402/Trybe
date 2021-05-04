const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
const positiveNumbers = numbers.map((number) => ((number > 0) ? number : number * (-1)));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(positiveNumbers); // [ 1, 2, 3, 4, -5 ]

// por for
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]