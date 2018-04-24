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
  test('Linked List insertAfter method with a filled Linked List', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    lL.insertAfter(2, 4);
    expect(lL.head.value).toEqual(1);
    expect(lL.head.next.value).toEqual(2);
    expect(lL.head.next.next.value).toEqual(4);
    expect(lL.head.next.next.next.value).toEqual(3);
    expect(lL.head.next.next.next.next).toBeNull();
  });
  test('Linked List insertAfter method with unfound Value', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    expect(lL.head.value).toEqual(1);
    expect(lL.head.next.value).toEqual(2);
    expect(lL.head.next.next.value).toEqual(3);
    expect(lL.head.next.next.next).toBeNull();
    expect(() => {
      lL.insertAfter(4, 4);
    }).toThrow(`Value ${4} does not exist in this Linked List`);
  });
  test('Linked List insertAfter method with an empty Linked List', () => {
    const lL = new LinkedList();
    lL.insertAfter(2, 4);
    expect(lL.head.value).toEqual(4);
    expect(lL.head.next).toBeNull();
  });
  test('Linked List insertBefore method with a filled Linked List', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    lL.insertBefore(2, 4);
    expect(lL.head.value).toEqual(1);
    expect(lL.head.next.value).toEqual(4);
    expect(lL.head.next.next.value).toEqual(2);
    expect(lL.head.next.next.next.value).toEqual(3);
    expect(lL.head.next.next.next.next).toBeNull();
  });
  test('Linked List insertBefore method with unfound Value', () => {
    const lL = new LinkedList();
    lL.append(1);
    lL.append(2);
    lL.append(3);
    expect(lL.head.value).toEqual(1);
    expect(lL.head.next.value).toEqual(2);
    expect(lL.head.next.next.value).toEqual(3);
    expect(lL.head.next.next.next).toBeNull();
    expect(() => {
      lL.insertBefore(4, 4);
    }).toThrow(`Value ${4} does not exist in this Linked List`);
  });
  test('Linked List insertBefore method with an empty Linked List', () => {
    const lL = new LinkedList();
    lL.insertBefore(2, 4);
    expect(lL.head.value).toEqual(4);
    expect(lL.head.next).toBeNull();
  });
});
