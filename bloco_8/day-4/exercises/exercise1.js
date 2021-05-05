
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // Dada uma matriz de matrizes, transforme em uma única matriz.
  const arraySum = arrays.reduce((accumulator, current) => accumulator.concat(current));
  return arraySum
}
// console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);