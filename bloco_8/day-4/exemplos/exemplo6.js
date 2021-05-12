const numbers = [50, 85, -30, 3, 100, 2900,300000, 15];
// quem é o maior?

const theBiggestOne = (accumulator, number) => accumulator > number ? accumulator : number; 
const bigger = numbers.reduce(theBiggestOne, 1);
console.log(bigger);