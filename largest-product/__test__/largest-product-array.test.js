'use strict';

const largestProduct = require('../lib/largest-product-array');

describe('largest-product-array.test.js', () => {
  describe('largestProduct.robust', () => {
    test('Should return the largest product of a 2D array 2x2.', () => {
      expect(largestProduct.robust([
        [1, 2],
        [3, 4]])).toEqual(12);
    });
    test('Should return the largest product of a 2D array 3x3.', () => {
      expect(largestProduct.robust([
        [1, 2, 7],
        [3, 4, 8],
        [5, 6, 9]])).toEqual(72);
    });
    test('Should return the largest product of a 2D array 5x4', () => {
      expect(largestProduct.robust([
        [1, 2, 7, -1],
        [3, 4, 8, 8],
        [5, 6, 9, 5],
        [11, 2, 6, 8],
        [-2, 7, 10, -1]])).toEqual(72);
    });
    test('Should return the largest product of a 2D array 7x7', () => {
      expect(largestProduct.robust([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]])).toEqual(0);
    });
    test('Should return the largest product of a 2D array 4x4', () => {
      expect(largestProduct.robust([
        [1, 2, 3, 4],
        [1, 2, 3, 5],
        [1, 2, 3, 4],
        [1, 2, 3, 6]])).toEqual(24);
    });
  });
});

