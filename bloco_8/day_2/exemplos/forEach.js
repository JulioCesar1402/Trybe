const listaDeEmails = [
  'exemplo1@exemplo.com',
  'exemplo2@exemplo.com',
  'exemplo3@exemplo.com',
  'exemplo4@exemplo.com'
]

const enviarEmail = (email) => {
  console.log(`email para ${email} for enviado com sucesso`);
};
listaDeEmails.forEach((item, posição, array) => {
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posição}`);
  console.log(`A quantidade total de pessoas no processo seletivo é: ${array.length}`);
})
console.log(`---------------------------------`);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
console.log(`---------------------------------`);
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
