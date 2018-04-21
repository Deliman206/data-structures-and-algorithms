'use strict';

const largestProduct = module.exports = {};

// largestProduct.simple = (arr2d) => {
//   let temp = 0;
//   for (let i = 0; i < arr2d.length; i++) {
//     for (let j = 0; j < arr2d[i].length; j++) {
//       if (arr2d[i][j + 1] !== undefined && arr2d[i][j] * arr2d[i][j + 1] > temp) {
//         temp = arr2d[i][j] * arr2d[i][j + 1];
//       }
//       if (arr2d[i][j - 1] !== undefined && arr2d[i][j] * arr2d[i][j - 1] > temp) {
//         temp = arr2d[i][j] * arr2d[i][j - 1];
//       }
//       if (arr2d[i + 1] !== undefined && arr2d[i][j] * arr2d[i + 1][j] > temp) {
//         temp = arr2d[i][j] * arr2d[i + 1][j];
//       }
//       if (arr2d[i - 1] !== undefined && arr2d[i][j] * arr2d[i - 1][j] > temp) {
//         temp = arr2d[i][j] * arr2d[i - 1][j];
//       }
//     }
//   }
//   return temp;
// };

largestProduct.robust = (arr2d) => {
  let temp = 0;

  function topLeft(i, j) {
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i + 1][j];
    }
  }
  function topMid(i, j) {
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function topRight(i, j) {
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function midLeft(i, j) {
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i + 1][j];
    }
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function midMid(i, j) {
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i + 1][j];
    }
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function midRight(i, j) {
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
    if (arr2d[i][j] * arr2d[i + 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i + 1][j];
    }
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function bottomLeft(i, j) {
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
  }
  function bottomMid(i, j) {
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
    if (arr2d[i][j] * arr2d[i][j + 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j + 1];
    }
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
  }
  function bottomRight(i, j) {
    if (arr2d[i][j] * arr2d[i - 1][j] > temp) {
      temp = arr2d[i][j] * arr2d[i - 1][j];
    }
    if (arr2d[i][j] * arr2d[i][j - 1] > temp) {
      temp = arr2d[i][j] * arr2d[i][j - 1];
    }
  }

  for (let x = 0; x < arr2d.length; x++) {
    for (let y = 0; y < arr2d[x].length; y++) {
      if (x === 0) {
        topLeft(x, y);
        topMid(x, y);
        topRight(x, y);
      }
      if (x > 0 && x < arr2d.length - 1) {
        midLeft(x, y);
        midMid(x, y);
        midRight(x, y);
      }
      if (x === arr2d.length - 1) {
        bottomLeft(x, y);
        bottomMid(x, y);
        bottomRight(x, y);
      }
    }
  }
  return temp;
};

