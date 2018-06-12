function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partitionHoare(array, left, right) {
  const pivot = Math.floor((left + right) / 2);

  while (left < right) {
    while (array[left] < array[pivot]) {
      left += 1;
    }
    while (array[right] > array[pivot]) {
      right -= 1;
    }

    if (left <= right) {
      swap(array, left, right);
      left += 1;
      right -= 1;
    }
  }
  return left;
}

export default function quicksortHoare(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quicksortHoare(array, left, pivot - 1);
  }

  if (right > pivot) {
    quicksortHoare(array, pivot, right)
  }

  return array;
}
