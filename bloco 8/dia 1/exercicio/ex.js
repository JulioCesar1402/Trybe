// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const emailGenerator = (nome) => {
  const reclaceSpace = nome.toLowerCase().replace(' ', '_');
  return {
    nomeCompleto: nome,
    email: `${reclaceSpace}@trybe.com`
  }
}

const newEmployees = () => {
  const employees = {
    id1: emailGenerator('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: emailGenerator('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
// console.log(newEmployees().id1);
// console.log(newEmployees().id2);
// console.log(newEmployees().id3);

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomNumber = () => Math.floor(Math.random() * 5);

const getRandom = (number) => {
  if((number === randomNumber())) {
    console.log('boa! você acertou');
  } else {
    console.log('Poxa, na proxima vai!');
  }
}

getRandom(2);