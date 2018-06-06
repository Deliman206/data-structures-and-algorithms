function swap(array, li, ri) {
  const temp = array[li];
  array[li] = array[ri];
  array[ri] = temp;
}

function partitionHoare(array, left, right) {
  let li = left;
  let ri = right;
  const pivot = Math.floor((li + ri) / 2);
  while (li <= ri) {
    while (array[li] < array[pivot]) {
      li += 1;
    }
    while (array[ri] > array[pivot]) {
      ri -= 1;
    }
    if (li <= ri) {
      swap(array, li, ri);
      li += 1;
      ri -= 1;
    }
  }
  return left;
}

export default function quicksort(array, left, right) {
  const li = left || 0;
  const ri = right || array.length - 1;

  // var pivot = partitionLomuto(array, left, right); 
  const pivot = partitionHoare(array, li, ri); 

  if (li < pivot - 1) {
    quicksort(array, li, pivot - 1);
  }
  if (ri > pivot) {
    quicksort(array, pivot, ri);
  }
  return array;
}
