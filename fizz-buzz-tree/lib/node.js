'use strict';

export default class Node {
  constructor(value, right = null, left = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}
