'use strict';

const side1 = Number(prompt('Side 1/3 of triangle: '));
const side2 = Number(prompt('Side 2/3 of triangle: '));
const side3 = Number(prompt('Side 3/3 of triangle: '));

if (side1 === side2 && side1 === side3) {
  document.querySelector('#target').innerHTML = 'Triangle  is equilateral';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  document.querySelector('#target').innerHTML = 'Triangle  is isoceles';
} else {
  document.querySelector('#target').innerHTML = 'Triangle  scalene';
}
