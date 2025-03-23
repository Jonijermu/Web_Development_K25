'use strict';

const score = Number(prompt('Enter your score'));

if (0 <= score && score <= 39) {
  document.querySelector('#target').innerHTML = 'Your grade is 0';
} else if (40 <= score && score <= 51) {
  document.querySelector('#target').innerHTML = 'Your grade is 1';
} else if (52 <= score && score <= 63) {
  document.querySelector('#target').innerHTML = 'Your grade is  2';
} else if (64 <= score && score <= 75) {
  document.querySelector('#target').innerHTML = 'Your grade is 3';
} else if (76 <= score && score <= 87) {
  document.querySelector('#target').innerHTML = 'Your grade is  4';
} else if (88 <= score && score <= 100) {
  document.querySelector('#target').innerHTML = 'Your grade is  5';
}
