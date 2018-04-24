'use strict';

const LinkedList = require('../lib/linked-list');

describe('Should validate the Linked List methods', () => {
  test('Linked List constructor', () => {
    const lL = new LinkedList();

    expect(lL.head).toBeNull();
  });
  test('Linked List append method', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    expect(lL.head.value).toEqual(1);
    expect(lL.head.next.value).toEqual(2);
    expect(lL.head.next.next.value).toEqual(3);
    expect(lL.head.next.next.next).toBeNull();
  });
});
