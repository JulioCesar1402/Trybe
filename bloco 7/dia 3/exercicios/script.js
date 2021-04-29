// !Praticando a implementação de testes - Parte 1
// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// ?Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.
// A função sum(a, b) retorna a soma do parâmetro a com o b
// *Teste se o retorno de sum(4, 5) é 9
// *Teste se o retorno de sum(0, 0) é 0
// *Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// *Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui
// assert.strictEqual(sum(4,5), 9, '4 + 5 = 9');
// assert.strictEqual(sum(0,0), 0, '0 + 0 = 0');

// assert.throws(() => {
//   sum(4, '5');
// })

// !A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// *Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// *Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// *Verifique se o array passado por parâmetro não sofreu alterações
// *Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.notStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4], 'O 3 deve ser removido')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [ 1, 2, 3, 4], 'o 5 não pertence ao array original');


//A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado


// const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'o 3 foi removido do array')
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o 3 não foi removido do array')
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'o 5 faz parte do array')


// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15),"fizzbuzz", "o numero tem que ser dividido por 3 e por 5")
assert.strictEqual(myFizzBuzz(3),"fizz", "o numero tem que ser dividido por 3")
assert.strictEqual(myFizzBuzz(5),"buzz", "o numero tem que ser dividido por 5")
assert.strictEqual(myFizzBuzz(2), 2, "o numero não pode ser dividido por 3 e por 5")
assert.strictEqual(myFizzBuzz("num"), false, "se não for um numero deve retornar false")

// Compare dois objetos (JSON) para verificar se são idênticos ou não

// const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj1, obj2, 'os objetos devem ser igual')
assert.notDeepStrictEqual(obj1, obj3, 'os objetos devem ser diferentes');

