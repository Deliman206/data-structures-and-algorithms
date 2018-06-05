'use strict';

import Queue from 'queue-fifo';

export default function findMatches(tree, value) {
  const solution = new Queue();
  const queue = new Queue();
  let currNode = null;

  if (!tree) return undefined;
  queue.enqueue(tree);
  while (queue) {
    currNode = queue.dequeue();
    for (let i = 0; i < currNode.children.length; i++) {
      queue.enqueue(currNode.children[i]);
    }
    if (currNode.value === value) {
      solution.enqueue(currNode);
    }
  }
  return solution.length;
}
