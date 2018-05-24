'use strict';

import KAryNode from '../lib/k-ary-node';
import findMatch from '../lib/find-matches';

describe('test K-ary-tree', () => {
  test('Should validate the find method of K-Ary Tree using Breadth Traversal', () => {
    const tree = new KAryNode(1);
    tree.appendChild(1); 
    tree.appendChild(2); 
    
    tree.children[0].appendChild(2); 
    tree.children[0].appendChild(3); 
    tree.children[0].appendChild(1); 
    
    tree.children[1].appendChild(1);
    tree.children[1].appendChild(1);
    tree.children[1].appendChild(1);

    expect(findMatch(tree, 1)).toEqual(6);
  });
});
