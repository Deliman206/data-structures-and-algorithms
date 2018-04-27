'use strict';

const binarySearch = module.exports = {};

binarySearch.search = (array, value) => {
  if (typeof value !== 'number') { return null; }
  if (!Array.isArray(array)) { return null; }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } 
  }
  return -1;
};
binarySearch.binary = (array, value) => {
  if (typeof value !== 'number') { return null; }
  if (!Array.isArray(array)) { return null; }

  let min = 0;
  let max = array.length - 1;
  let mid = Math.floor((min + max) / 2);
  let count = 0;
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
  
    if (array[mid] === value) {
      return count;
    } else if (array[mid] < value) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    count += 1;
  }
  return -1;
};
let count = 0;
const testArray = [];
while (count < 1000000) {
  const num = Math.floor(Math.random() * 10000);
  testArray.push(num);
  count += 1;
}
testArray.sort((a, b) => a - b);
console.log(binarySearch.binary(testArray, Math.floor(Math.random() * 10000)));
