// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengthsNumber = [];
const wordLengths = (words) => {
  for(let i = 0; i < words.length; i += 1) {
    wordLengthsNumber.push(words[i].length);
  }
  return wordLengthsNumber;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);