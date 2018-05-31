import Bst from './bst';
import Node from './node';

export default function findFirstMatch(string) {
  const array = string.split(' ');
  const root = new Node(array.shift());
  const bst = new Bst(root);
  while (array.length > 0) {
    const node = new Node(array.shift());
    // bst.insert(node);
    if (bst.insert(node)) {
      return node.value;
    } 
  }
  return 'No matches';
}
