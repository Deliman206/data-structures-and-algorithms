'use strict';

const shiftArray = require('../lib/shift-array.js');

describe('shift-array.test.js', () => {
  describe('shiftArray.insertShiftArray', () => {
    test('Should put VALUE into middle of an EVEN ARRAY LENGTH.', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4], 6)).toEqual([1, 2, 6, 3, 4]);
    });
    test('Should put VALUE into middle of an ODD ARRAY LENGTH.', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    });
    test('Should return NULL is VALUE is NOT a Number', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4, 5], 'name')).toEqual(null);
    });
  });
});
