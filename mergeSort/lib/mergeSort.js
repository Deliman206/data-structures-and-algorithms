function merge(left, right) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(right[indexRight]);
      indexRight += 1;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2); 
  const left = array.slice(0, middle); 
  const right = array.slice(middle); 

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}

export default mergeSort;
