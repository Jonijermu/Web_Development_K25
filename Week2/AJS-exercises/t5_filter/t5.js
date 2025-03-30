'use strict';

// Sample clothes array
const clothes = [
  {type: "shirt", size: "M", color: "red"},
  {type: "pants", size: "L", color: "blue"},
  {type: "dress", size: "S", color: "red"}
];


function getRedClothes(clothes) {
  return clothes.filter(clothe => clothe.color === 'red')
}

// Test the getRedClothes function
const redClothes = getRedClothes(clothes);
console.log(redClothes);

// Output should be:
// [ { type: 'shirt', size: 'M', color: 'red' },
//   { type: 'dress', size: 'S', color: 'red' } ]
