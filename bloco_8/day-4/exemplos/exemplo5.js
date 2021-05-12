const numbers = [50, 85, -30, 3, 100, 2900,300000, 15];

// quem é o maior?

function theBiggestOne() {
  let count = 0;
  for(let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i - 1]) {
      count = numbers[i];
    }
  }
  console.log(count)
}
theBiggestOne();