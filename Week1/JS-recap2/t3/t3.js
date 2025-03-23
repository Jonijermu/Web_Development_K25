'use strict';

function promptNumbers() {
  let numbers = [];
  while (true) {
    const input = prompt("Enter a number (or 'done' to finish):");
    if (input === 'done') {
      break;
    }
    let number = parseFloat(input);
    if (number % 2 === 0) {
      numbers.push(number);
    }
  }
  return 'Even Numbers: ' + numbers;
}

let numbers = promptNumbers();
console.log(numbers);
