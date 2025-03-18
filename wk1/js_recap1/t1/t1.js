'use strict';

const tempInC = prompt('Give temperature in celcius: ');

const tempInF = (tempInC * 9) / 5 + 32;

document.querySelector('#target').innerHTML =
  `${tempInC} Celsius is in fahrenheit ${tempInF} K`;
