import leftJoin from '../left-join';

describe('Should validate the leftJoin function', () => {
  const hm1 = new Map();
  const hm2 = new Map();
  hm1.set('fond', ['enamored']);
  hm1.set('wrath', ['anger', 'notHappy']);
  hm2.set('fond', ['upset']);
  hm2.set('wrong', ['happy']);

  test('Should return a hashmap with the concatination of two hashmaps', () => {
    const hm3 = new Map();
    hm3.set('fond', ['enamored', 'upset']);
    hm3.set('wrath', ['anger', 'notHappy', null]);
    expect(leftJoin(hm1, hm2)).toEqual(hm3);
  });
});
