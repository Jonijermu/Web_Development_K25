'use strict';

let fruits = [];
fruits[0] = 'apple';
fruits[1] = 'banana';
fruits[2] = 'orange';
fruits[3] = 'grape';
fruits[4] = 'kiwi';

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('Length of the list is: ' + fruits.length);
console.log('Index 2 item  is :' + fruits[2]);
console.log('last  element is: ' + fruits.length + ' ' + fruits[4]);

let vegetables = [];

const veg1 = prompt('Put vegetables  inside  a list: ');
vegetables.push(veg1);
const veg2 = prompt('Put vegetables  inside  a list: ');
vegetables.push(veg2);
const veg3 = prompt('Put vegetables  inside  a list: ');
vegetables.push(veg3);

for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}
console.log('length of the  vegetables  is: ' + vegetables.length);
