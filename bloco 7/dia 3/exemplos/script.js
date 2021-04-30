// const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(10, 2);

// assert.strictEqual(expected, 5, 'Dez dividido por dois é igual a cinco');

const assert = require('assert');
const myFunction = () => {};
assert.strictEqual(typeof myFunction, 'function');