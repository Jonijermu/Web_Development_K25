'use strict';

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort((a, b) => a - b);
  } else if (order === 'desc') {
    numbers.sort((a, b) => b - a);
  }
  return numbers;
}

const numbers = [55, 44, 66, 33, 88, 22, 99, 11, 100];
//console.log('Ascending: ', sortArray(numbers, 'asc'));
console.log('Descending: ', sortArray(numbers, 'desc'));
