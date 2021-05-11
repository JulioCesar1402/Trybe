const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('R', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
console.log(verifyFirstLetter('Y', listNames)); // false
console.log(verifyFirstLetter('-----------------'));

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).some((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));