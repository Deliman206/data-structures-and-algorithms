'use strict';

const LinkedList = require('../../linked-list/lib/linked-list');
const linkedListMerge = require('../lib/ll-merge');

describe('Should validate the Merge Method of 2 Linked Lists', () => {
  test('Insert 2 Linked List of same length and out put a Linked list that merges the 2 Lists', () => {
    const lL1 = new LinkedList();
    lL1.append(6);
    lL1.append(4);
    lL1.append(2);
    const lL2 = new LinkedList();
    lL2.append(5);
    lL2.append(3);
    lL2.append(1);
    const lL3 = new LinkedList();
    lL3.append(6);
    lL3.append(5);
    lL3.append(4);
    lL3.append(3);
    lL3.append(2);
    lL3.append(1);
    expect(linkedListMerge(lL1, lL2)).toMatchObject(lL3);
  });
  
});
