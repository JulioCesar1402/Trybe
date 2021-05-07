// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwii', 'watermelon', 'apple'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pineapple', 'strawberry', 'tangerine'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const mixOfFruitSalad = [...fruit, ...additional];
  return mixOfFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));