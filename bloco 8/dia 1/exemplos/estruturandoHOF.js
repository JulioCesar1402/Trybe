// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);


// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;


// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakeUp = () => {
  console.log('Acordando!!')
}

const repeat = (number, func) => {
  for(let count = 0; count < number; count += 1){
    func();
  }
}

repeat(3, wakeUp);

// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo: