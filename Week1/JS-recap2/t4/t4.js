'use strict';

function sortArray(numbers) {
  numbers.sort((a, b) => a - b);
  console.log(numbers);
}

const numbers = [55, 44, 66, 33, 88, 22, 99, 11, 100];
console.log(numbers);
sortArray(numbers);
