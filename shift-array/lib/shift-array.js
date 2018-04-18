'use strict';

const shiftArray = module.exports = {};
shiftArray.insertShiftArray = (array, value) => {
  const solutionArray = [];
  let newIndexOdd;
  let newIndexEven;
  if (typeof value !== 'number') { return null; }
  for (let i = 0; i < array.length; i++) {
    if (!(array.length % 2)) {
      newIndexEven = array.length / 2;
    }
    if (array.length % 2) {
      newIndexOdd = (array.length / 2) - 0.5;
    }
    if (i === newIndexEven) {
      solutionArray.push(value);
    }
    if (i === newIndexOdd) {
      solutionArray.push(array[i]);
      solutionArray.push(value);
      i++;
    }
    solutionArray.push(array[i]);
  }
  return solutionArray;
};
