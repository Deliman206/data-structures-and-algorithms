'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
    return this;
  }

  kthFromEnd(k) {
    let currNode = this.head;
    let count = 0;
    while (currNode) {
      currNode = currNode.next;
      count += 1;
    }
    currNode = this.head;
    while (currNode) {
      if (count - 1 === k) {
        return currNode;
      }
      currNode = currNode.next;
      count -= 1;
    }
    return 'Exception';
  }
};
