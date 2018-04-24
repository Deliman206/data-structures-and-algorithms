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
  insertAfter(value, newValue) {
    if (!this.head) {
      this.head = new Node(newValue);
      return this;
    } 
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const temp = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = temp;
        return this;
      }
      currentNode = currentNode.next;
    }
    throw new Error(`Value ${value} does not exist in this Linked List`);
  }
  insertBefore(value, newValue) {
    if (!this.head) {
      this.head = new Node(newValue);
      return this;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next !== null) {
        if (currentNode.next.value === value) {
          const temp = currentNode.next;
          currentNode.next = new Node(newValue);
          currentNode.next.next = temp;
          return this;
        }
      }
      currentNode = currentNode.next;
    }
    throw new Error(`Value ${value} does not exist in this Linked List`);
  }
};
