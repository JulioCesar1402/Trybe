// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// let number = 10;
// let arrayNumber = [];
// let result = 1;

// for(let index = 1; index <= number; index += 1) { 
//   arrayNumber.push(index);
//   result *= index;

// }

// console.log(`${number}! = ${arrayNumber} = ${result}
// onde ',' representa '.'`);

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// const longestWord = (event) => {
//   let wordArray = event.split(' ');
//   let maxlength = 0;
//   let result = '';
//   for (const word of wordArray) {
//     if(word.length > maxlength) {
//       maxlenght = word.length;
//       result = word;
//     }
//   }
//   return result;
// }
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// const locateButton = document.querySelector('.button');
// const locateP = document.querySelector('.count');

// let countNumbers = 0;
// locateButton.addEventListener('click', () => {
//   countNumbers += 1;
//   locateP.innerHTML = countNumbers;
// });


// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Julio Cesar"))




// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".