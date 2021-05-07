const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//? dessa forma fica claro que é possivel renomear o nome da minha propriedade atravez do object destructuring desde que seja tomada tal atitude { propriedade:nomeVariável } = objeto