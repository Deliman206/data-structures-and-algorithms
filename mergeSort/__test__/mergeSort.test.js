import mergeSort from '../lib/mergeSort';

describe('Should Validate the merge sort function', () => {
  test('Should return a sorted array', () => {
    const array = [3, 1, 8, 7, 4];
    expect(mergeSort(array)).toEqual([1, 3, 4, 7, 8]);
  });
});
