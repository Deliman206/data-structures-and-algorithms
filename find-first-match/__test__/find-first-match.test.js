import findFirstMatch from '../lib/find-first-match';
// import Bst from '../lib/bst';
// import Node from '../lib/node';

describe('should validate findFirstMatch function', () => {
  test('Should return AND using findFirstMatch', () => {
    const string = 'Jack and Jilly run up the hill and run down';
    expect(findFirstMatch(string)).toEqual('and');
  });
  test('Should return NO MATCHES using findFirstMatch', () => {
    const string = 'Jack and Jill went up a hill';
    expect(findFirstMatch(string)).toEqual('No matches');
  })
});
