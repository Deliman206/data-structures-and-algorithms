'use strict';

const LinkedList = require('../lib/ll-kth-from-end');

describe('Should validate kthFromEnd method', () => {
  test('Should return same object with 2 different Linked Lists but with similar output after kthFromEnd', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    const lLTest = new LinkedList();
    lLTest.append(5);
    lLTest.append(4);
    lLTest.append(6);
    lLTest.append(2);    
    lLTest.append(3);
    expect(lL.kthFromEnd(1)).toMatchObject(lLTest.kthFromEnd(1));
  });
  test('Should return EXCEPTION when the KTH Node DNE', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    expect(lL.kthFromEnd(3)).toEqual('Exception');
  });
});
