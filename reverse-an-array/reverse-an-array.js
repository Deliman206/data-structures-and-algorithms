'use strict';

const reverseAnArray = module.exports = {};

reverseAnArray.reverseArray = (array) => {
  const max = array.length - 1;
  const solutionArray = [];
  for (let i = max; i >= 0; i--) {
    solutionArray.push(array[i]);
  }
  return solutionArray;
};
