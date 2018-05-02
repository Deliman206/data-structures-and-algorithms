'use strict';

import match from '../lib/matching-bracket';

describe('Should validate the matching-bracket function', () => {
  test('Should return true from valid string', () => {
    const test0 = '(){}[]';
    const test1 = '({}[])';
    const test2 = '(){[]}';
    expect(match(test0)).toBeTruthy();
    expect(match(test1)).toBeTruthy();
    expect(match(test2)).toBeTruthy();
  });
  test('Should return false from valid string', () => {
    const test0 = '(){{}]';
    const test1 = '({}[)])';
    const test2 = '({})}{[]}';
    expect(match(test0)).toBeFalsy();
    expect(match(test1)).toBeFalsy();
    expect(match(test2)).toBeFalsy();
  });
});
