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
  
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
  
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};
