'use strict';


const rotateMatrix = module.exports = {};

rotateMatrix.rotate90Clockwise = (array2d) => {
  const dummyArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let x = 2; x > 0; x--) {
    let counter = 0;
    for (let y = 0; y < array2d[x].length; y++) {
      if (x === 2) {
        dummyArray[counter][0] = array2d[x][counter];
        counter += counter + 1;
      }
      if (x === 1) {
        dummyArray[counter][1] = array2d[x][counter];
        counter += counter + 1;
      }
      if (x === 0) {
        dummyArray[counter][2] = array2d[x][counter];
        counter += counter + 1;
      }
    }
  }
  return dummyArray;
};
