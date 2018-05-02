// 'use strict';

// const binarySearch = require('../lib/binary-search.js');

// describe('binary-search.test.js', () => {
//   describe('binarySearch.search', () => {
//     test('Should return the index of the given VALUE in the given ARRAY.', () => {
//       expect(binarySearch.search([1, 2, 3, 4, 5], 4)).toEqual(3);
//     });
//     test('Should return -1 if the VALUE is not in the ARRAY.', () => {
//       expect(binarySearch.search([1, 2, 3, 4, 5], 10)).toEqual(-1);
//     });
//     test('Should return null if the VALUE passed in NaN.', () => {
//       expect(binarySearch.search([1, 2, 3, 4, 5], 'string')).toEqual(null);
//     });
//     test('Should return null if the ARRAY passed in is not an array.', () => {
//       expect(binarySearch.search('string', 6)).toEqual(null);
//     });
//   });
//   describe('binarySearch.binary', () => {
//     test('Should return the index of the given VALUE in the given ARRAY if the VALUE is above midpoint.', () => {
//       expect(binarySearch.binary([1, 2, 3, 4, 5], 4)).toEqual(3);
//     });
//     test('Should return the index of the given VALUE in the given ARRAY is below midpoint.', () => {
//       expect(binarySearch.binary([1, 2, 3, 4, 5], 2)).toEqual(1);
//     });
//     test('Should return -1 if the VALUE is not in the ARRAY.', () => {
//       expect(binarySearch.binary([1, 2, 3, 4, 5], 10)).toEqual(-1);
//     });
//     test('Should return null if the VALUE passed in NaN.', () => {
//       expect(binarySearch.binary([1, 2, 3, 4, 5], 'string')).toEqual(null);
//     });
//     test('Should return null if the ARRAY passed in is not an array.', () => {
//       expect(binarySearch.binary('string', 6)).toEqual(null);
//     });
//   });
// });
