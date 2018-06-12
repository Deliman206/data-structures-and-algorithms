import quickSort from '../lib/quickSort';

describe('Should Validate the quickSort function', () => {
  test('Should return array in sorted order', () => {
    const array = [3, 5, 1, 8, 6, 2];
    expect(quickSort(array)).toEqual([1, 2, 3, 5, 6, 8]);
  });
  test('Should return undefined if there is no array input or the array is empty', () => {
    const array = [];
    expect(quickSort(array)).toEqual(undefined);
    expect(quickSort()).toEqual(undefined);
  });
  test('Should return ALREADY SORTED if input array is sorted', () => {
    const array = [1, 2, 3, 4, 5];
    expect(quickSort(array)).toEqual('Already Sorted');
  });
});
