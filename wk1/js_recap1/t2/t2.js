'use strict';

const x1 = prompt('Give number for the x1: ');
const x2 = prompt('Give number for the x2: ');
const y1 = prompt('Give number for the y1: ');
const y2 = prompt('Give number for the y2: ');

const distance = Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);
console.log(distance);
