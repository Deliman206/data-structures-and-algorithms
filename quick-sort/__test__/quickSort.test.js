import quickSort from '../lib/quickSort';

describe('Should Validate the quickSort function', () => {
  test('Should return array in sorted order', () => {
    const array = [3, 5, 1, 8, 6, 2];
    expect(quickSort(array)).toEqual([1, 2, 3, 5, 6, 8]);
  });
});
