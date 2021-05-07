let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const teste = numerosPares.filter(values => values % 2 === 0);
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
console.log(teste); // [6, 8, 10, 12]