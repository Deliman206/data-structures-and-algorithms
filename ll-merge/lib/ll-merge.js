'use strict';

module.exports = function linkedListMerge(lL1, lL2) {
  let currNode1 = lL1.head;
  let currNode2 = lL2.head;

  while (currNode1) {
    const temp = currNode1.next; // save relationship for LL1
    currNode1.next = currNode2; // redirect to LL2
    currNode2 = temp; // step through LL2
    currNode1 = currNode1.next;
  }
  return lL1;
};
