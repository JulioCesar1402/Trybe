// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// console.log(saudacoes[1](saudacoes[0])); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// (saudacoes[1](saudacoes[0])); // Olá

const [string, action] = saudacoes;
(action(string)); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring