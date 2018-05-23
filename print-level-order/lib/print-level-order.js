'use strict';

import Queue from 'queue-fifo';

export default function printLevelOrder(tree) {
  if (!tree.root) {
    return null;
  }
  const queue = new Queue();
  queue.enqueue(tree.root);

  let currentNode = null;
  let solution = ''; /* eslint-disable-line */

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();

    solution += `\n${currentNode.value}`;
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.enqueue(currentNode.children[i]);
    }
  }
  return solution;
}
