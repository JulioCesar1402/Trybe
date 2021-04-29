// Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui
let sumOfNumbers = 0;
const sumAllNumbers = () => {
  for(let i = 0; i < numbers.length; i += 1) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);