'use strict';

const x1 = parseFloat(prompt('Give number  value for the x1: '));
const x2 = parseFloat(prompt('Give number value for the x2: '));
const y1 = parseFloat(prompt('Give number  value for the y1: '));
const y2 = parseFloat(prompt('Give number value for the y2: '));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector('#target').innerHTML =
  `√((${x2} - ${x1}) ^ (2 + (${y2} - ${y1}) ^ 2)`;

document.querySelector('#target1').innerHTML = `distance is ${distance}`;
