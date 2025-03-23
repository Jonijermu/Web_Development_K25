'use strict';

const number = Number(prompt('Enter  positive number: '));
let amount = 0;

for (let i = 0; i <= number; i++) {
  amount += i;
}

document.querySelector('#target').innerHTML = `amount is ${amount}`;
