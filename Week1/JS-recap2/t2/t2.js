'use strict';

let numbers = [];

for (let i = 1; i < 6; i++) {
  const number = parseFloat(prompt('Give a number: '));
  console.log('Enter Number ' + i + ': ' + number);
  numbers.push(number);
}

console.log('Numbers: ' + numbers);

let checkNumber = parseFloat(prompt('Check if number already in the list'));
console.log('Number is in the  list: ' + numbers.includes(checkNumber));

numbers.pop();
console.log('updated numbers: ' + numbers);

numbers.sort((a, b) => a - b);
console.log('sorted numbers: ' + numbers);
