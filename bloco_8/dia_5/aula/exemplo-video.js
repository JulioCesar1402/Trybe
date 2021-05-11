//! Com array
const carros = ['Gol','HB20','Focus'];
const motos = ['Biz', 'R1'];
const veiculos = ['F40', ...carros, 'Uno', ...motos];
// [...array; ...array2];
// [array[0], array[1], array2[0], array[1], array[2]];

console.log(veiculos);

//! com objetos
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}
const pessoa = {
  nome: 'Nadia',
  idade: '28',
  cidade: 'BH',
}
const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
}
//  mesmo principio do exemplo do array
console.log(pessoaTryber);